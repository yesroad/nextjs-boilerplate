import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';

import { styles } from '@styles/Global.styles';
import { Layout } from '@/components';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={styles} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
