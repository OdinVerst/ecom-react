import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = (props) => {
    const { title, imageUrl, size, linkUrl, history, match } = props;
    return (
        <div className={`menu-item ${size ? size: ''}`} 
            onClick={()=> history.push(`${match.url}${linkUrl}`)} >
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

export default withRouter(MenuItem);
