import { createSelector } from 'reselect';

const shopItems = state => state.shop;

export const shopSelector = createSelector(
    [shopItems],
    shop => shop
);