import React, { createContext, useEffect, useState } from 'react';

import {
	addItemToCart,
	removeItemFromCart,
	filterItemFromCartItems,
	calcuateCartItemsCount,
} from './cart.utils';

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: () => {},
	removeItem: () => {},
	clearItemFromCart: () => {},
	cartItemsCount: 0,
});

const CartProvider = ({ children }) => {
	const [hidden, setHidden] = useState(true);
	const [cartItems, setcartItems] = useState([]);
	const [cartItemsCount, setcartItemsCount] = useState(0);

	useEffect(() => {
		setcartItemsCount(calcuateCartItemsCount(cartItems));
	}, [cartItems]);

	const toggleHidden = () => setHidden(!hidden);
	const addItem = item => setcartItems(addItemToCart(cartItems, item));
	const removeItem = item => setcartItems(removeItemFromCart(cartItems, item));
	const clearItemFromCart = item =>
		setcartItems(filterItemFromCartItems(cartItems, item));

	return (
		<CartContext.Provider
			value={{
				hidden,
				toggleHidden,
				cartItems,
				addItem,
				removeItem,
				clearItemFromCart,
				cartItemsCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
