import { UPDATE_COLLECTIONS } from "../types";
import SHOP_DATA from "./shop.data";

export const shopReducer = (state = SHOP_DATA, actions) => {
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