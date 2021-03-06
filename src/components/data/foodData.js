export const formatPrice = (price) => {
	return price.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	})
}

export const foodItems = [
	{
		name: 'Cheese Pizza',
		img: '/images/pizza.png',
		section: 'Pizza',
		price: 1
	},
	{
		name: 'Pepperoni Pizza',
		img: '/images/pizza2.jpeg',
		section: 'Pizza',
		price: 1.5
	},
	{
		name: 'Chicken Pizza',
		img: '/images/chicken-pizza.jpeg',
		section: 'Pizza',
		price: 2
	},
	{
		img: '/images/healthy-pizza.jpeg',
		name: 'Veggie Pizza',
		section: 'Pizza',
		price: 2
	},
	{
		img: '/images/burger.jpeg',
		name: 'Burger',
		section: 'Sandwich',
		price: 3
	},
	{ img: '/images/gyro.jpeg', name: 'Gyro', section: 'Sandwich', price: 4.5 },
	{
		img: '/images/sandwich.jpeg',
		name: 'Shrimp PoBoy',
		section: 'Sandwich',
		price: 6
	},
	{
		img: '/images/fries.jpeg',
		name: 'Fries',
		section: 'Sides',
		price: 1
	},
	{
		price: 1,
		name: 'Soda',
		section: 'Drinks',
		choices: ['Coke', 'Sprite', 'Root Beer', 'Mountain Dew', 'Cheerwine', 'Pepsi']
	}
];

export const foods = foodItems.reduce((res, food) => {
	if (!res[food.section]) {
		res[food.section] = [];
	}
	res[food.section].push(food);
	return res;
}, {});
