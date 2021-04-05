import {connect} from 'react-redux';

import {clearItemToCart, addToCart, removeToCart} from '../../redux/cart/cartActions';
import {
    CheckoutBlockStyle,
    CheckoutImgWrapStyle,
    CheckoutItemStyle,
    CheckoutQuantityValueStyle,
    CheckoutRemoveBtnStyle
} from "./CheckoutItem.styles";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
        <CheckoutItemStyle>
            <CheckoutImgWrapStyle>
                <img src={imageUrl} alt={name} className="image"/>
            </CheckoutImgWrapStyle>
            <CheckoutBlockStyle>{name}</CheckoutBlockStyle>
            <CheckoutBlockStyle>
                <button onClick={() => removeItem(cartItem)} className='arrow reset-btn'>&#10094;</button>
                <CheckoutQuantityValueStyle>{quantity}</CheckoutQuantityValueStyle>
                <button onClick={() => addItem(cartItem)} className='arrow reset-btn'>&#10095;</button>
            </CheckoutBlockStyle>
            <CheckoutBlockStyle>{price}</CheckoutBlockStyle>
            <CheckoutRemoveBtnStyle onClick={() => {
                clearItem(cartItem)
            }}>&#10005;</CheckoutRemoveBtnStyle>
        </CheckoutItemStyle>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemToCart(item)),
    addItem: item => dispatch(addToCart(item)),
    removeItem: item => dispatch(removeToCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
