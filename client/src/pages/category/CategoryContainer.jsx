import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {compose} from "redux";

import {isLoadingCollections} from "../../redux/shop/shopSelector";

import Spiner from "../../components/spiner/Spiner";
import Categorypage from "./Categorypage";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !isLoadingCollections(state)
})

const CategoryContainer = compose(
    connect(mapStateToProps),
    Spiner
)(Categorypage);

export default CategoryContainer;