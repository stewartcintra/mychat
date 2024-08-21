import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFFhVHzSV3CqltKRSmvzt3qkX8YvNQsdc',
  authDomain: 'mychat-18177.firebaseapp.com',
  projectId: 'mychat-18177',
  storageBucket: 'mychat-18177.appspot.com',
  messagingSenderId: '1040939296106',
  appId: '1:1040939296106:web:4d040a07506e5fd1b27113',
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
