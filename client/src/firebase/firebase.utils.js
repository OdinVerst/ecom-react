import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from "../config";

const firebaseConfig = config.firebase;

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getUserCartRef = async userId => {
    const cartsRef = firestore.collection('carts').where('userId', '==', userId);
    const snapShot = await cartsRef.get();

    if (!snapShot.empty) return snapShot.docs[0].ref;

    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;

};

export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
    
    const userRef = firestore.doc(`users/${user.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email} = user;
        const createdAt = new Date();

        try {
            await userRef.set({
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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            getUserCartRef(userAuth.uid)
            resolve(userAuth)
        }, reject)
    })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;

