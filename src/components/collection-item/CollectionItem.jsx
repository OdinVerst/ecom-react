import React from 'react';

import './CollectionItem.scss';
import ButtonCustom from '../button-custom/ButtonCustom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';

const CollectionItem = ({addToCart, ...item}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage:  `url(${imageUrl})`
                }}
            ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <ButtonCustom onClick={() => addToCart(item)} isInverse> Add to cart </ButtonCustom>
        </div>
    )
}

const mapDispatchToProps = {
    addToCart: addToCart
};

export default connect(null, mapDispatchToProps)(CollectionItem);
