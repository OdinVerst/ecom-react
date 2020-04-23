import React from 'react';

import './ButtonCustom.scss';

const ButtonCustom = ({children, type, ...otherProps}) => {
    return (
        <button className='custom-button' type={type} {...otherProps}>
          {children}  
        </button>
    )
}

export default ButtonCustom;
