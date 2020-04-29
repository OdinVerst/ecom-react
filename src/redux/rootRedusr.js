import { combineReducers } from "redux";
import userReduser from "./user/userReduser";

const rootReduser = combineReducers({
    user: userReduser
});

export default rootReduser;