import React from 'react';
import { connect } from 'react-redux';

import { clearItemToCart, addToCart, removeToCart } from '../../redux/cart/cartActions';
import './CheckoutItem.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} className="image"/>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <button onClick={() => removeItem(cartItem)} className='arrow reset-btn'>&#10094;</button>
                <span className="value">{quantity}</span>
                <button onClick={() => addItem(cartItem)} className='arrow reset-btn'>&#10095;</button>
            </div>
            <span className="price">{price}</span>
            <button className="remove-button reset-btn" onClick={() => {clearItem(cartItem)}}>&#10005;</button>
        </div>
    );
};

const mapDistpachToProps = dispatch => ({
    clearItem: item => dispatch(clearItemToCart(item)), 
    addItem: item => dispatch(addToCart(item)),
    removeItem: item => dispatch(removeToCart(item))
});

export default connect(null, mapDistpachToProps)(CheckoutItem);
