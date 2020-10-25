import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from "../config";

const firebaseConfig = config.firebase;

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
    
    const userRef = firestore.doc(`users/${user.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email} = user;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error(`Error added user: -m"${error.message}"`)
        }
    } 

    return userRef;

};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            id: doc.id,
            routeName: decodeURI(title.toLowerCase()),
            title,
            items
        }
    });

    return transformedCollections.reduce((accumulator, currentValue) => {
        accumulator[currentValue.title] = currentValue;
        return accumulator;
    }, {});
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

