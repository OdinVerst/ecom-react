import React from 'react'
import { connect } from 'react-redux';

import { categoryShopSelector } from '../../redux/shop/shopSelector';
import './Categorypage.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';

const Categorypage = ({ collictions }) => {
    console.log(collictions);
    const { title, items } = collictions;
    return (
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} {...item} />)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collictions: categoryShopSelector(ownProps.match.params.categoryID)(state)
})

export default connect(mapStateToProps)(Categorypage);
