import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReduser from "./user/userReducer";
import cartReduser from "./cart/cardReducer";
import { directoryReducer } from "./directory/directoryReduser";
import { shopReducer } from "./shop/shopReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReduser,
    cart: cartReduser,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);