import {all, call, put, takeLatest} from 'redux-saga/effects';
import {SINGOUT_SUCCESS} from "../types";
import {clearCart} from "./cartActions";

function* clearCardHandler () {
    yield put(clearCart())
}

function* onSingOut () {
    yield takeLatest(SINGOUT_SUCCESS, clearCardHandler)
}

export function* cartSagas() {
    yield all([call(onSingOut)])
}