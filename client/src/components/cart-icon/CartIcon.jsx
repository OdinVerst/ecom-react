import {connect} from 'react-redux';

import {ReactComponent as CardSVGIcon} from '../../assets/card-icon.svg';
import {setToggleShowCart} from '../../redux/cart/cartActions';
import {cartItemsQuantitySelector} from '../../redux/cart/cartSelector';
import {CartIconStyle, CartIconValueStyle} from "./CartIcon.styles";

const CartIcon = ({setToggleShowCart, cartItemsQuantity}) => (
    <CartIconStyle onClick={setToggleShowCart}>
        <CardSVGIcon/>
        <CartIconValueStyle>{cartItemsQuantity} </CartIconValueStyle>
    </CartIconStyle>
);

const mapDispatchToProps = dispatch => ({
    setToggleShowCart: () => dispatch(setToggleShowCart())
});

const mapStateToProps = state => ({
    cartItemsQuantity: cartItemsQuantitySelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);