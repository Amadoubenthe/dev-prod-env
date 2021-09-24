import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from 'src/config';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth()
export const db = firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider()