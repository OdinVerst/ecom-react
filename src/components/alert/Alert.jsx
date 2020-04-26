import React from 'react';

import './Alert.scss';

export const Alert = ({text, style}) => {
    return (
        <div className={`${style} alert`}>
            {text}
        </div>
    )
}
