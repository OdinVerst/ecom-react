import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Categorypage from '../category/Categorypage';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { upadteCollections } from '../../redux/shop/shopActions';
import Spiner from '../../components/spiner/Spiner';

const CollectionsOverviewWithSpiner = Spiner(CollectionsOverview);
const CategorypageWithSpiner = Spiner(Categorypage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }
  unsubscribeFromCollection = null;
  

  componentDidMount() {
    const { upadteCollections } = this.props;
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      upadteCollections(collections);
      this.setState({ loading: false });
    });
  }

  render () {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
          <Route exact path={match.path} render={props => <CollectionsOverviewWithSpiner isLoading={loading} {...props}  />} />
          <Route path={`${match.path}/:categoryID`} render={props => <CategorypageWithSpiner isLoading={loading} {...props}  />} />
      </div>
    )
  }
}

const mapToDiaspatchProps = (dispatch) => ({
  upadteCollections: (collectionsMap) => dispatch(upadteCollections(collectionsMap))
});

export default connect(null, mapToDiaspatchProps)(ShopPage);
