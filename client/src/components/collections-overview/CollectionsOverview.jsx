import React from 'react';
import {connect} from 'react-redux';

import CollectionPreview from '../collections-preview/CollectionPreview';
import {selectCollectionsForPreview} from '../../redux/shop/shopSelector';
import {CollectionsOverviewStyle} from "./CollectionsOverview.styles";

const CollectionsOverview = ({collections}) => {
    return <CollectionsOverviewStyle>
        {collections.map(({id, ...otherCollectionsProps}) => <CollectionPreview key={id} {...otherCollectionsProps} />)}
    </CollectionsOverviewStyle>;
};

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
