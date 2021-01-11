import {FETCH_COLLECTIONS_FAILED, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS} from "../types"
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";


export const startFetchingCollections = () => {
    return {
        type: FETCH_COLLECTIONS_START
    }
}

export const successFetchingCollections = (collections) => {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        payload: collections
    }
}

export const errorFetchingCollections = (errMsg) => {
    return {
        type: FETCH_COLLECTIONS_FAILED,
        payload: errMsg
    }
}

export const startFetchingCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection');
        dispatch(startFetchingCollections());

        collectionRef.get().then(async snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            dispatch(successFetchingCollections(collections))
        }).catch(err => dispatch(errorFetchingCollections(err.message)));
    }
}