import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collections-preview/CollectionPreview';
import { shopSelector } from '../../redux/shop/shopSelector';

const ShopPage = ({ collections }) => {
    return (
        <div>
            {collections.map(({ id, ...otherCollectionsProps }) => <CollectionPreview key={id} {...otherCollectionsProps} />)}
        </div>
    )
};

const mapStateToProps = state => ({
    collections: shopSelector(state)
});

export default connect(mapStateToProps)(ShopPage);
