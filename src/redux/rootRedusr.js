import { combineReducers } from "redux";
import userReduser from "./user/userReduser";
import cartReduser from "./cart/cardReduser";

const rootReduser = combineReducers({
    user: userReduser,
    cart: cartReduser
});

export default rootReduser;