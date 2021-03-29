import {useEffect} from "react";
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {startFetchingCollections} from "../../redux/shop/shopActions";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverviewContainer";
import CategoryContainer from "../category/CategoryContainer";

const ShopPage = ({startFetchingCollections, match}) => {
    useEffect(() => startFetchingCollections(),[startFetchingCollections]);

    return (
        <div className="shop-page">
            <Route exact path={match.path} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:categoryID`} component={CategoryContainer}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startFetchingCollections: () => dispatch(startFetchingCollections())
});

export default connect(null, mapDispatchToProps)(ShopPage);
