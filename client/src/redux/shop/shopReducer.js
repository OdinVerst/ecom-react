import {FETCH_COLLECTIONS_FAILED, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS} from "../types";

const initialState = {
    collections: null,
    isFetching: false,
    errorMessage: null
}

export const shopReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: actions.payload
            }
        case FETCH_COLLECTIONS_FAILED:
            return  {
                ...state,
                isFetching: false,
                errorMessage: actions.payload
            }
        default:
            return state;
    }
}