import { TOOGLE_SHOW_CART } from "../types";

const initialState = {
    hidden: true
};

const cartReduser = (state = initialState, actions) => {
    switch (actions.type) {
        case TOOGLE_SHOW_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default cartReduser;