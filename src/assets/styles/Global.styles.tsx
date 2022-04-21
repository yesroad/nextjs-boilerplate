import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const styles = css`
	${emotionNormalize}

	* {
		font-family: 'NanumBarunGothic', sans-serif;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		border: 0;
	}

	html {
		overflow-x: hidden;
	}

	body {
		position: relative;
		overflow-x: hidden;
	}
	button {
		background: transparent;
		cursor: pointer;
	}
	ul {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	img {
		max-width: 100%;
	}

	// 한줄 말줄임
	.ellipsis {
		width: 100%;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;
