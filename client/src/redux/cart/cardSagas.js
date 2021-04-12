import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import {SINGOUT_SUCCESS, SINGIN_SUCCESS, ADD_TO_CART, REMOVE_TO_CARD, CLEAR_ITEM_TO_CARD} from "../types";
import {clearCart, setCartFromFirebase} from "./cartActions";
import {getUserCartRef} from "../../firebase/firebase.utils";
import {currentUserSelector} from "../user/userSelector";
import {cartItemsSelector} from "./cartSelector";

function* clearCardHandler () {
    yield put(clearCart())
}

export function* updateCartInFirebase() {
    console.log(111)
    const currentUser = yield select(currentUserSelector);
    if (currentUser) {
        try {
            const cartRef = yield getUserCartRef(currentUser.id);
            const cartItems = yield select(cartItemsSelector);
            yield cartRef.update({ cartItems });
        } catch (error) {
            console.log(error);
        }
    }
}

export function* checkCartFromFirebase({ payload: user }) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

function* onSingOut () {
    yield takeLatest(SINGOUT_SUCCESS, clearCardHandler)
}

export function* onUserSignIn() {
    yield takeLatest(SINGIN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
    yield takeLatest(
        [ADD_TO_CART, REMOVE_TO_CARD, CLEAR_ITEM_TO_CARD],
        updateCartInFirebase
    );
}

export function* cartSagas() {
    yield all([call(onSingOut), call(onUserSignIn), call(onCartChange)])
}