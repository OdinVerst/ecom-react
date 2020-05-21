import { createSelector } from 'reselect';

const cartItems = state => state.cart;

export const cartItemsSelector = createSelector(
    [cartItems],
    cartItems => cartItems.cart
);

export const cartHiddenSelector = createSelector(
    [cartItems],
    cartItems => cartItems.hidden
);

export const cartItemsQuantitySelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((accumulateQuantity, cartItem) => accumulateQuantity + cartItem.quantity, 0)
);


export const cartTotalSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((accumulateQuantity, cartItem) => accumulateQuantity + (cartItem.quantity * cartItem.price), 0)
);
