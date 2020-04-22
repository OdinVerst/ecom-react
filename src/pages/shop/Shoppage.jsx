import React, { Component } from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collections-preview/CollectionPreview';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                {this.state.collections.map(({ id, ...otherCollectionsProps }) => <CollectionPreview key={id} {...otherCollectionsProps} />)}
            </div>
        )
    }
}

export default ShopPage;
