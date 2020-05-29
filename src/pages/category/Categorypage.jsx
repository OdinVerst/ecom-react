import React from 'react'
import { connect } from 'react-redux';
import { categoryShopSelector } from '../../redux/shop/shopSelector';

const Categorypage = ({ collictions }) => {
    console.log(collictions);
    return (
        <div className="">
            <h1>Categorypage</h1>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collictions: categoryShopSelector(ownProps.match.params.categoryID)(state)
})

export default connect(mapStateToProps)(Categorypage);
