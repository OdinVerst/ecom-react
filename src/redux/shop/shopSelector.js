import { createSelector } from 'reselect';


const shopItems = state => state.shop;

export const shopSelector = createSelector(
    [shopItems],
    shop => Object.keys(shop).map(key => shop[key])
);

export const categoryShopSelector = ownProps => createSelector(
    [shopItems],
    collections => collections[ownProps]
);