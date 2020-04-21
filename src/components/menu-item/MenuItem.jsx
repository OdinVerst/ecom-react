import React from 'react';

import './MenuItem.scss';

export const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`menu-item ${size ? size: ''}`}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <div className="title">{title}</div>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )
}
