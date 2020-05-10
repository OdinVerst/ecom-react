import { TOOGLE_SHOW_CART, ADD_TO_CART } from "../types";

const initialState = {
    hidden: true,
    card: []
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
                card: [...state.card, actions.payload]
            }
        default:
            return state;
    }
};

export default cartReduser;