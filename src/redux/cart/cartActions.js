import { TOOGLE_SHOW_CART, ADD_TO_CART, REMOVE_TO_CARD, CLEAR_ITEM_TO_CARD } from '../types';

export const setToggleShowCart = () =>  ({
    type: TOOGLE_SHOW_CART
});

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
});

export const removeToCart = payload => ({
    type: REMOVE_TO_CARD,
    payload
});

export const clearItemToCart = payload => ({
    type: CLEAR_ITEM_TO_CARD,
    payload
});