import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReduser from "./user/userReducer";
import cartReduser from "./cart/cardReducer";
import { directoryReducer } from "./directory/directoryReduser";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReduser,
    cart: cartReduser,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);