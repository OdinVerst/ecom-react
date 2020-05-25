import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = ({cartItem}) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} className="image"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <button className="remove-button reset-btn">&#10005;</button>
        </div>
    )
}

export default CheckoutItem;
