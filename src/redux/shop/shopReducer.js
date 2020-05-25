import SHOP_DATA from "./shop.data";

export const shopReducer = (state = SHOP_DATA, actions) => {
    switch(actions.type) {
        default:
            return state;
    }
}