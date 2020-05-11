import React from 'react';

import './CartItem.scss';

export const CartItem = ({item}) => {
    const { imageUrl, name, quantity, price } = item;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">${price} (x{quantity})</span>
            </div>
        </div>
    )
}
