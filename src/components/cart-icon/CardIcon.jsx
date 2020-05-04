import React from 'react';

import './CardIcon.scss';
import {  ReactComponent as CardSVGIcon } from '../../assets/card-icon.svg';

export const CardIcon = () => {
    return (
        <div className="cart-icon">
            <CardSVGIcon className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    )
}
