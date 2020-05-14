import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.scss';
import {  ReactComponent as CardSVGIcon } from '../../assets/card-icon.svg';
import { setToggleShowCart } from '../../redux/cart/cartActions';

const CartIcon = ({ setToggleShowCart, cartItems }) => {
    return (
        <div className="cart-icon" onClick={setToggleShowCart}>
            <CardSVGIcon className="shopping-icon" />
            <span className="item-count"> {cartItems} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setToggleShowCart: () => dispatch(setToggleShowCart()) 
});

const mapStateToProps = state => ({
    cartItems: state.cart.cart.reduce((accumulateQuantity, cartItem) => 
        accumulateQuantity + cartItem.quantity
    , 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);