import React, { useState } from 'react';
import Navbar from '../src/components/navbar/navbar';
import Banner from '../src/components/banner/banner';
import Menu from '../src/components/menu/menu';
import { GlobalStyle } from './styles/GlobalStyle';
import FoodDialog from '../src/components/foodDialog/foodDialog';
import Order from '../src/components/order/order';
import { useOpenFood } from '../src/components/hooks/useOpenFoods';
import { useOrders } from '../src/components/hooks/useOrders';

function App() {
	const openFood = useOpenFood();
	const orders = useOrders();

	return (
		<React.Fragment>
			<GlobalStyle />
			<FoodDialog {...openFood} {...orders} />
			<Navbar />
			<Order {...orders} />
			<Banner />
			<Menu {...openFood} />
		</React.Fragment>
	);
}

export default App;
