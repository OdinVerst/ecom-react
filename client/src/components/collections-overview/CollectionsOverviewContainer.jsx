import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {compose} from "redux";

import {isFetchingCollections} from "../../redux/shop/shopSelector";

import Spiner from "../spiner/Spiner";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
    isLoading: isFetchingCollections
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    Spiner
)(CollectionsOverview);

export default CollectionsOverviewContainer;