import { takeLatest, put, call } from 'redux-saga/effects';
import {FETCH_COLLECTIONS_FAILED, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS} from "../types";
import {fetchCollections} from "./utils";

function* fetchingCollectionsAsync () {
    try {
        const collections = yield call(fetchCollections);
        yield put({type: FETCH_COLLECTIONS_SUCCESS, payload: collections})
    } catch (e) {
        yield put({type: FETCH_COLLECTIONS_FAILED, payload: e.message})
    }
}

export function* fetchingCollectionsStart () {
    yield takeLatest(FETCH_COLLECTIONS_START, fetchingCollectionsAsync)
}