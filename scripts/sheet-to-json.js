const fs = require('fs');
const { GoogleSpreadsheet } = require('google-spreadsheet');

require('dotenv').config();

(async function () {
	// 시트 초기화 - Sheet URL에 있는 docID 입력
	const doc = new GoogleSpreadsheet(process.env.DOC_ID);

	// 인증 초기화
	await doc.useServiceAccountAuth({
		client_email: process.env.CLIENT_EMAIL,
		private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
	});

	await doc.loadInfo();

	const sheets = await Object.values(doc._rawSheets);

	// 지원하는 언어 - 한국어, 영어
	const supportedLang = ['ko', 'en'];

	for await (let sheet of sheets) {
		// 숨김 처리된 시트는 json으로 변환하지 않는다.
		if (!sheet._rawProperties.hidden) {
			const rows = await sheet.getRows();

			supportedLang.forEach((lang) => {
				const obj = rows.reduce((acc, cur) => {
					return { ...acc, ...{ [cur.key]: cur[lang] } };
				}, {});

				const data = JSON.stringify(obj);

				// json파일 저장 위치
				const dir = `locales/${lang}`;

				if (!fs.existsSync(dir)) {
					fs.mkdirSync(dir, { recursive: true });
				}
				fs.writeFileSync(`${dir}/${sheet.title}.json`, data);
			});
		}
	}
})();
