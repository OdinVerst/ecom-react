import { SET_CURRENT_USER } from "../types";

const initialState = {
    user: null
}

const userReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReduser;