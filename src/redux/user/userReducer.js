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
    errorSingIn: null,
    errorSingUp: null
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
                user: action.payload,
                errorSingIn: null,
                errorSingUp: null
            }
        case SINGIN_FAILED:
            return {
                ...state,
                loading: false,
                user: null,
                errorSingIn: action.payload
            }
        case SINGUP_FAILED:
            return {
                ...state,
                loading: false,
                user: null,
                errorSingUp: action.payload
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