import Footer from './Footer/Footer';
import Header from './Header/Header';

import { Wrap, Container } from '@styles/Common.styles';

const Layout: React.FC = ({ children }) => {
	return (
		<Wrap>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</Wrap>
	);
};

export default Layout;
