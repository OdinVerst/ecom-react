import {all, call} from 'redux-saga/effects';
import {shopsSagas} from "./shop/shopSagas";
import {userSagas} from "./user/userSagas";
import {cartSagas} from "./cart/cardSagas";

export default function* rootSaga() {
    yield all([call(shopsSagas), call(userSagas), call(cartSagas)])
}