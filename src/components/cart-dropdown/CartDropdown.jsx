import React from 'react';

import './CartDropdown.scss';
import ButtonCustom from '../button-custom/ButtonCustom';
import { connect } from 'react-redux';
import { CartItem } from '../cart-item/CartItem';
import { cartItemsSelector } from '../../redux/cart/cartSelector';

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            {
                cartItems && cartItems.map(item => <CartItem key={item.id} item={item} />)
            }
            <ButtonCustom>Go to checkout</ButtonCustom>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state)
});

export default connect(mapStateToProps)(CartDropdown);
