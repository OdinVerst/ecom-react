import { UPDATE_COLLECTIONS } from "../types";

export const shopReducer = (state = null, actions) => {
    switch(actions.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: actions.payload
            }
        default:
            return state;
    }
}