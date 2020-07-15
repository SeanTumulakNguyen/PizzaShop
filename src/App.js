import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../src/components/navbar/navbar';
import Banner from '../src/components/banner/banner';
import Menu from '../src/components/menu/menu';

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
  font-family: 'Open Sans', sans-serif;
 }

 h1, h2, h3 {
  font-family: 'Righteous', cursive;
 }
 `;

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Navbar />
			<Banner />
			<Menu />
			<div>Hello Sliceline</div>
		</React.Fragment>
	);
}

export default App;
