import {
    TOOGLE_SHOW_CART,
    ADD_TO_CART,
    REMOVE_TO_CARD,
    CLEAR_ITEM_TO_CARD,
    CLEAR_ALL_CARD,
    SET_CART_FROM_FIREBASE
} from '../types';
import { addToCartHandler, removeToCartHandler } from './utils';

const initialState = {
    hidden: true,
    cart: []
};

const cartReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case TOOGLE_SHOW_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: addToCartHandler(state.cart, actions.payload)
            }
        case REMOVE_TO_CARD:
            return {
                ...state,
                cart: removeToCartHandler(state.cart, actions.payload)
            }
        case CLEAR_ITEM_TO_CARD:
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== actions.payload.id)
            }
        case CLEAR_ALL_CARD:
            return {
                ...state,
                cart: []
            }
        case SET_CART_FROM_FIREBASE:
            return {
                ...state,
                cart: actions.payload
            };
        default:
            return state;
    }
};

export default cartReducer;