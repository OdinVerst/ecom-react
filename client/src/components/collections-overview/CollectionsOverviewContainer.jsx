import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {compose} from "redux";

import {isFetchingCollections} from "../../redux/shop/shopSelector";

import SpinnerWrapper from "../spinner/SpinnerWrapper";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
    isLoading: isFetchingCollections
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    SpinnerWrapper
)(CollectionsOverview);

export default CollectionsOverviewContainer;