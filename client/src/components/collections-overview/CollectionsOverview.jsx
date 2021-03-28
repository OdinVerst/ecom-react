import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collections-preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  return <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionsProps }) => <CollectionPreview key={id} {...otherCollectionsProps} />)}
  </div>;
};

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
