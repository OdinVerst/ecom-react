import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import ButtonCustom from '../button-custom/ButtonCustom';
import { CartItem } from '../cart-item/CartItem';
import { cartItemsSelector } from '../../redux/cart/cartSelector';
import { setToggleShowCart } from '../../redux/cart/cartActions';

import './CartDropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-dropdown__wrap-list">
                {
                    cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <ButtonCustom onClick={() => {
                history.push('/checkout');
                dispatch(setToggleShowCart())
            }}>Go to checkout</ButtonCustom>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
