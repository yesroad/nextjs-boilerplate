import type { NextPage } from 'next';
import Head from 'next/head';

import { Sub } from '@/components';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sub</title>
			</Head>
			<Sub />
		</>
	);
};

export default Home;
