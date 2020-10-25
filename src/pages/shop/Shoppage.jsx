import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Categorypage from '../category/Categorypage';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { upadteCollections } from '../../redux/shop/shopActions';

class ShopPage extends React.Component {
  unsubscribeFromCollection = null;

  componentDidMount() {
    const { upadteCollections } = this.props;
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      upadteCollections(collections);
    });
  }

  render () {
    const { match } = this.props;
    return (
      <div className="shop-page">
          <Route exact path={match.path} component={CollectionsOverview} />
          <Route path={`${match.path}/:categoryID`} component={Categorypage} />
      </div>
    )
  }
}

const mapToDiaspatchProps = (dispatch) => ({
  upadteCollections: (collectionsMap) => dispatch(upadteCollections(collectionsMap))
});

export default connect(null, mapToDiaspatchProps)(ShopPage);
