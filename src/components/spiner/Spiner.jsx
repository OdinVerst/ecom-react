import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './Spiner.styles';

const Spiner = ComponentWrapper => {
    const SpinerHandler = ({ isLoading, ...otherProps }) => {
        if (isLoading) {
            return <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        }
        return <ComponentWrapper {...otherProps} />
    }
    return SpinerHandler;
}

export default Spiner
