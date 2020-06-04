import React from 'react';
import { connect } from 'react-redux';

import { cartItemsSelector, cartTotalSelector } from '../../redux/cart/cartSelector';
import './Checkout.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { StripeButton } from '../../components/stripe-button/StripeButton';

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
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>TOTAL: ${total}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 02/22 - CVV: 123
            </div>
            <StripeButton price={total} />
        </div>
    )
};

const mapStatetoProps = state => ({
    cartItems: cartItemsSelector(state),
    total: cartTotalSelector(state)
})

export default connect(mapStatetoProps)(Checkout);
