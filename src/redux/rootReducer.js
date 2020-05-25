import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReduser from "./user/userReducer";
import cartReduser from "./cart/cardReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReduser,
    cart: cartReduser
});

export default persistReducer(persistConfig, rootReducer);