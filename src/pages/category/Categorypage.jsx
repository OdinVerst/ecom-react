import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/collection-item/CollectionItem";
import {
  CollectionItemsWrapper,
  CollectionPageWrapper,
  CollectionTitleWrapper,
} from "./Ctegorypage.styles";

const Categorypage = ({ collections }) => {
  console.log(collections);
  const { title, items } = collections;
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

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.categoryID);
  return {
  collections: selectCollection(ownProps.match.params.categoryID)(state),
}
};

export default connect(mapStateToProps)(Categorypage);
