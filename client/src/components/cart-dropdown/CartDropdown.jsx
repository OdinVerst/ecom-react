import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import ButtonCustom from '../button-custom/ButtonCustom';
import CartItem from '../cart-item/CartItem';
import { cartItemsSelector } from '../../redux/cart/cartSelector';
import { setToggleShowCart } from '../../redux/cart/cartActions';

import {CartDropdownListStyle, CartDropdownStyle, EmptyMessageStyle} from "./CartDropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <CartDropdownStyle>
            <CartDropdownListStyle>
                {
                    cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                        : <EmptyMessageStyle>Your cart is empty</EmptyMessageStyle>
                }
            </CartDropdownListStyle>
            <ButtonCustom onClick={() => {
                history.push('/checkout');
                dispatch(setToggleShowCart())
            }}>Go to checkout</ButtonCustom>
        </CartDropdownStyle>
    )
}

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
