import { all, call } from 'redux-saga/effects';
import {fetchingCollectionsStart} from "./shop/shopSagas";
import {userSagas} from "./user/userSagas";

export default function* rootSaga() {
    yield all([call(fetchingCollectionsStart), call(userSagas)])
}