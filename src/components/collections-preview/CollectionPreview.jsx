import React from 'react';

import './CollectionPreview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h2 className="title">{title}</h2>
            <div className="preview">
                { items.filter((item, index) => index < 4).map(({...itemProps}) => <CollectionItem key={itemProps.id} {...itemProps}/>) }
            </div>
        </div>
    );
};

export default CollectionPreview;
