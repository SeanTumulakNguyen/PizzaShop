import React from 'react';
import Navbar from '../src/components/navbar/navbar';
import Banner from '../src/components/banner/banner';
import Menu from '../src/components/menu/menu';
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Navbar />
			<Banner />
			<Menu />
		</React.Fragment>
	);
}

export default App;
