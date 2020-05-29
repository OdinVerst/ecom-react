import { createSelector } from 'reselect';

const SHOP_ID_VALUE = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const shopItems = state => state.shop;

export const shopSelector = createSelector(
    [shopItems],
    shop => shop
);

export const categoryShopSelector = ownProps => createSelector(
    [shopSelector],
    collections => collections.find(elem => elem.id === SHOP_ID_VALUE[ownProps])
);