import { TOOGLE_SHOW_CART, ADD_TO_CART } from "../types";
import { addToCartHandler } from "./utils";

const initialState = {
    hidden: true,
    cart: []
};

const cartReduser = (state = initialState, actions) => {
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
        default:
            return state;
    }
};

export default cartReduser;