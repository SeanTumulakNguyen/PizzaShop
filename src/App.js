import React, { useState } from 'react';
import Navbar from '../src/components/navbar/navbar';
import Banner from '../src/components/banner/banner';
import Menu from '../src/components/menu/menu';
import { GlobalStyle } from './styles/GlobalStyle';
import FoodDialog from '../src/components/foodDialog/foodDialog';

function App() {
	const [ openFood, setOpenFood ] = useState();

	return (
		<React.Fragment>
			<GlobalStyle />
			<FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
			<Navbar />
			<Banner />
			<Menu setOpenFood={setOpenFood} />
		</React.Fragment>
	);
}

export default App;
