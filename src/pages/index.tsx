import type { NextPage } from 'next';
import Head from 'next/head';

import { Main } from '@/components';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Main</title>
			</Head>
			<Main />
		</>
	);
};

export default Home;
