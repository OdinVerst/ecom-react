import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.scss';
import {  ReactComponent as CardSVGIcon } from '../../assets/card-icon.svg';
import { setToggleShowCart } from '../../redux/cart/cartActions';

const CartIcon = ({ setToggleShowCart }) => {
    return (
        <div className="cart-icon" onClick={setToggleShowCart}>
            <CardSVGIcon className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setToggleShowCart: () => dispatch(setToggleShowCart()) 
});

export default connect(null, mapDispatchToProps)(CartIcon);