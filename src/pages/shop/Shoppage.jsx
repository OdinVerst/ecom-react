import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Categorypage from '../category/Categorypage';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
        <Route exact path={match.path} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryID`} component={Categorypage} />
    </div>
  );
};

export default ShopPage;
