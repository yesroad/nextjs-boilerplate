import styled from '@emotion/styled';

export const Wrap = styled.div`
	width: 100%;
	height: auto;
`;

export const Container = styled.main`
	width: 100%;
	height: auto;
	padding: 100px 0;
`;

// 전체 width 100% 감싸는 영역
export const SectionWrap = styled.section`
	width: 100%;
	height: auto;
	position: relative;
`;

// 내부 컨텐츠 width 1280px 감싸는 영역
export const InnerWrap = styled.article`
	width: 1280px;
	height: 100%;
	margin: 0 auto;
	position: relative;
	padding: 0 15px;
`;
