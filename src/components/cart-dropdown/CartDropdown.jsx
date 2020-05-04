import React from 'react';

import './CartDropdown.scss';
import ButtonCustom from '../button-custom/ButtonCustom';

export const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <ButtonCustom>Go to checkout</ButtonCustom>
        </div>
    )
}
