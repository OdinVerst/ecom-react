import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {compose} from "redux";

import {isLoadingCollections} from "../../redux/shop/shopSelector";

import SpinnerWrapper from "../../components/spinner/SpinnerWrapper";
import Categorypage from "./Categorypage";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !isLoadingCollections(state)
})

const CategoryContainer = compose(
    connect(mapStateToProps),
    SpinnerWrapper
)(Categorypage);

export default CategoryContainer;