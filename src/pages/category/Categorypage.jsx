import React from "react";
import { connect } from "react-redux";

import { categoryShopSelector } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/collection-item/CollectionItem";
import {
  CollectionItemsWrapper,
  CollectionPageWrapper,
  CollectionTitleWrapper,
} from "./Ctegorypage.styles";

const Categorypage = ({ collictions }) => {
  const { title, items } = collictions;
  return (
    <CollectionPageWrapper>
      <CollectionTitleWrapper>{title}</CollectionTitleWrapper>
      <CollectionItemsWrapper>
        {items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </CollectionItemsWrapper>
    </CollectionPageWrapper>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collictions: categoryShopSelector(ownProps.match.params.categoryID)(state),
});

export default connect(mapStateToProps)(Categorypage);
