import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";

export const fetchCollections = async () => {
    const collectionRef = await firestore.collection('collection');
    const collections = await collectionRef.get();
    const result = await convertCollectionsSnapshotToMap(collections)
    if (!Object.keys(result).length) throw new Error("Whoops!");
    return result;
}