import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCsrwamPW4e_t6Lt6L7z3d0rv0M-sr8RS0",
        authDomain: "crwn-db-705fc.firebaseapp.com",
        databaseURL: "https://crwn-db.firebaseio.com",
        projectId: "crwn-db-705fc",
        storageBucket: "crwn-db-705fc.appspot.com",
        messagingSenderId: "427340011167",
        appId: "1:427340011167:web:537ec8120df19529ac74aa"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if (!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        });
                } catch (error) {
                        console.log('error creating user', error.message);
                }
        }
 
        return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;