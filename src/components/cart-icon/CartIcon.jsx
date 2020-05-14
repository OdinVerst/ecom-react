import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.scss';
import {  ReactComponent as CardSVGIcon } from '../../assets/card-icon.svg';
import { setToggleShowCart } from '../../redux/cart/cartActions';
import { cartItemsQuantitySelector } from '../../redux/cart/cartSelector';

const CartIcon = ({ setToggleShowCart, cartItemsQuantity }) => {
    return (
        <div className="cart-icon" onClick={setToggleShowCart}>
            <CardSVGIcon className="shopping-icon" />
            <span className="item-count"> {cartItemsQuantity} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setToggleShowCart: () => dispatch(setToggleShowCart()) 
});

const mapStateToProps = state => ({
    cartItemsQuantity: cartItemsQuantitySelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);