import { createSelector } from 'reselect';

const shopItems = state => state.shop;

export const shopSelector = createSelector(
    [shopItems],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [shopSelector],
    (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([shopItems], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );