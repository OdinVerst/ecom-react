import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Categorypage from '../category/Categorypage';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'

class ShopPage extends React.Component {
  unsubscribeFromCollection = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot);
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

export default ShopPage;
