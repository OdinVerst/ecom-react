import { TOOGLE_SHOW_CART, ADD_TO_CART } from "../types"

export const setToggleShowCart = () => {
    return {
        type: TOOGLE_SHOW_CART
    };
};

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    };
};