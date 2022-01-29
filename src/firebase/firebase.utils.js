import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAkoia1zr564XCyXCqszM3iC10_t3opZeQ",
  authDomain: "cskomra-crwn-db.firebaseapp.com",
  projectId: "cskomra-crwn-db",
  storageBucket: "cskomra-crwn-db.appspot.com",
  messagingSenderId: "852417967887",
  appId: "1:852417967887:web:b490c81a4284f03517307a",
  measurementId: "G-HSESH6PYE1"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;