import React from 'react';
import styled from 'styled-components';
import { foods } from '../data/foodData';
import { Food, FoodGrid, FoodLabel } from '../menu/foodgrid';

const MenuStyled = styled.div`
	margin: 0px 400px 50px 20px;
	height: 1000px;
`;

const Menu = () => {
	return (
		<MenuStyled>
			<h1>Menu</h1>
			<FoodGrid>
				{foods.map((f, i) => (
					<Food img={f.img} key={i}>
						<FoodLabel>{f.name}</FoodLabel>
					</Food>
				))}
			</FoodGrid>
		</MenuStyled>
	);
};

export default Menu;
