import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyALtg6MfVBvWDa1cxYWXoUtT91Ve--A_x8",
    authDomain: "clone-cba18.firebaseapp.com",
    projectId: "clone-cba18",
    storageBucket: "clone-cba18.appspot.com",
    messagingSenderId: "517848451625",
    appId: "1:517848451625:web:4fff7137370134db6bea38"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
