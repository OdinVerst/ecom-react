import {
    EMAIL_SINGIN_START,
    GOOGLE_SINGIN_START,
    SINGIN_FAILED,
    SINGIN_SUCCESS,
    SINGOUT_FAILED,
    SINGOUT_SUCCESS, SINGUP_FAILED
} from "../types";

const initialState = {
    user: null,
    loading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_SINGIN_START:
        case EMAIL_SINGIN_START:
            return {
                ...state,
                loading: true
            }
        case SINGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case SINGIN_FAILED:
        case SINGUP_FAILED:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case SINGOUT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SINGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: null,
                error: null
            }
        default:
            return state;
    }
}

export default userReducer;