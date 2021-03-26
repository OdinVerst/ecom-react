import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {startFetchingCollections} from "../../redux/shop/shopActions";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverviewContainer";
import CategoryContainer from "../category/CategoryContainer";

class ShopPage extends React.Component {
    componentDidMount() {
        startFetchingCollections()
    }

    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={match.path} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:categoryID`} component={CategoryContainer}/>
            </div>
        )
    }
}

const mapToDiaspatchProps = (dispatch) => ({
    startFetchingCollections: dispatch(startFetchingCollections())
});

export default connect(null, mapToDiaspatchProps)(ShopPage);
