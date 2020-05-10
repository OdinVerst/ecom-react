import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.scss';
import {  ReactComponent as CardSVGIcon } from '../../assets/card-icon.svg';
import { setToggleShowCart } from '../../redux/cart/cartActions';

const CartIcon = ({ setToggleShowCart, cartItems }) => {
    console.log(cartItems.length)
    return (
        <div className="cart-icon" onClick={setToggleShowCart}>
            <CardSVGIcon className="shopping-icon" />
            <span className="item-count"> {cartItems.length} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setToggleShowCart: () => dispatch(setToggleShowCart()) 
});

const mapStateToProps = state => ({
    cartItems: state.cart.cart
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);