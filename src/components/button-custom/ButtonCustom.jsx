import React from 'react';

import './ButtonCustom.scss';

const ButtonCustom = ({children, type, classStyle, ...otherProps}) => {
    return (
        <button className={`custom-button ${classStyle}`} type={type} {...otherProps}>
          {children}  
        </button>
    )
}

export default ButtonCustom;
