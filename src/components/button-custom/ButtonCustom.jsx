import React from 'react';

import { ButtonCustomContainer } from './ButtonCustom.styles';

const ButtonCustom = ({children, type, ...otherProps}) => {
    return (
        <ButtonCustomContainer type={type} {...otherProps}>
          {children}  
        </ButtonCustomContainer>
    )
}

export default ButtonCustom;
