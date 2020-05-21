import React from 'react';
import { connect } from 'react-redux';

import { cartItemsSelector, cartTotalSelector } from '../../redux/cart/cartSelector';
import './Checkout.scss';

const Checkout = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            </div>
            {cartItems.map(cartItem => (
                cartItem.name
            ))}
            <div className='total'>TOTAL: ${total}</div>
        </div>
    )
};

const mapStatetoProps = state => ({
    cartItems: cartItemsSelector(state),
    total: cartTotalSelector(state)
})

export default connect(mapStatetoProps)(Checkout);
