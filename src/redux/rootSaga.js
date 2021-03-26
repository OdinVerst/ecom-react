import { all, call } from 'redux-saga/effects';
import {fetchingCollectionsStart} from "./shop/shopSagas";

export default function* rootSaga() {
    yield all([call(fetchingCollectionsStart)])
}