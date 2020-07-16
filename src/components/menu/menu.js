import React from 'react';
import styled from 'styled-components';
import { foods } from '../data/foodData';
import { Food, FoodGrid, FoodLabel } from '../menu/foodgrid';

const MenuStyled = styled.div`
	margin: 0px 400px 50px 20px;
	height: 1000px;
`;

const Menu = ({setOpenFood}) => {
	return (
		<MenuStyled>
			{Object.entries(foods).map(([ sectionName, foods ]) => (
				<React.Fragment>
					<h1>{sectionName}</h1>
					<FoodGrid>
						{foods.map((f, i) => (
							<Food img={f.img} key={i} onClick={() => {
								setOpenFood(f);
							}}>
								<FoodLabel>{f.name}</FoodLabel>
							</Food>
						))}
					</FoodGrid>
				</React.Fragment>
			))}
		</MenuStyled>
	);
};

export default Menu;
