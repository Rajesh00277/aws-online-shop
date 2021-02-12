import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../provider/cart-provider/CartProvider';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history }) => {
	const { cartItems, toggleHidden } = useContext(CartContext);

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					toggleHidden();
				}}
			>
				GOTO CHECKOUT
			</CustomButton>
		</div>
	);
};

export default withRouter(CartDropdown);
