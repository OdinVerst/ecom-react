import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Categorypage from '../category/Categorypage';

import { connect } from 'react-redux';
import Spiner from '../../components/spiner/Spiner';
import {isFetchingCollections} from "../../redux/shop/shopSelector";
import {startFetchingCollectionsAsync} from "../../redux/shop/shopActions";

const CollectionsOverviewWithSpiner = Spiner(CollectionsOverview);
const CategorypageWithSpiner = Spiner(Categorypage);

class ShopPage extends React.Component {


  componentDidMount() {
    startFetchingCollectionsAsync()
  }

  render () {
    const { match, isLoading } = this.props;
    return (
      <div className="shop-page">
          <Route exact path={match.path} render={props => <CollectionsOverviewWithSpiner isLoading={isLoading} {...props}  />} />
          <Route path={`${match.path}/:categoryID`} render={props => <CategorypageWithSpiner isLoading={isLoading} {...props}  />} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    isLoading: isFetchingCollections(state)
});

const mapToDiaspatchProps = (dispatch) => ({
    startFetchingCollectionsAsync: dispatch(startFetchingCollectionsAsync())
});

export default connect(mapStateToProps, mapToDiaspatchProps)(ShopPage);
