import {takeLatest, call, put, all} from 'redux-saga/effects';
import {
    CHECK_USER_SESSION,
    EMAIL_SINGIN_START,
    GOOGLE_SINGIN_START,
    SINGIN_FAILED,
    SINGIN_SUCCESS, SINGOUT_FAILED,
    SINGOUT_START, SINGOUT_SUCCESS, SINGUP_FAILED, SINGUP_START
} from "../types";
import {auth, createUserDocument, getCurrentUser, googleProvider} from "../../firebase/firebase.utils";

function* getSnapShotUser(user) {
    try {
        const userRef = yield call(createUserDocument, user);
        const userSnapshot = yield userRef.get();
        yield put({type: SINGIN_SUCCESS, payload: {id: userSnapshot.id, ...userSnapshot.data()}})
    } catch (e) {
        yield put({type: SINGIN_FAILED, payload: e.message})
    }
}

function* googleSingInAsync() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotUser(user)
    } catch (e) {
        yield put({type: SINGIN_FAILED, payload: e.message})
    }
}

function* emailSingInAsync({loginValue}) {
    const {email, password} = loginValue;
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotUser(user)
    } catch (e) {
        yield put({type: SINGIN_FAILED, payload: e.message})
    }
}

function* checkUserSession() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapShotUser(userAuth)
    } catch (e) {
        yield put({type: SINGIN_FAILED, payload: e.message})
    }
}

function* singOut() {
    try {
        yield auth.signOut();
        yield put({type: SINGOUT_SUCCESS})
    } catch (e) {
        yield put({type: SINGOUT_FAILED, payload: e.message})
    }
}

function* singUp({singUpValues: {email, password, displayName}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield getSnapShotUser({...user, displayName})
    } catch (e) {
        yield put({type: SINGUP_FAILED, payload: e.message})
    }
}

function* onGoogleSingIn() {
    yield takeLatest(GOOGLE_SINGIN_START, googleSingInAsync)
}

function* onEmailSingIn() {
    yield takeLatest(EMAIL_SINGIN_START, emailSingInAsync)
}


function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, checkUserSession)
}

function* onSingOut() {
    yield takeLatest(SINGOUT_START, singOut)
}

function* onSingUp () {
    yield takeLatest(SINGUP_START, singUp)
}

export function* userSagas() {
    yield all([call(onGoogleSingIn), call(onEmailSingIn), call(onCheckUserSession), call(onSingOut), call(onSingUp)])
}