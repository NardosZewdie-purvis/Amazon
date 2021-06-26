// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrpJ9yP4SILPPbw5sw2hPO8YuLgH0oRZQ",
  authDomain: "clone-front-end-43c84.firebaseapp.com",
  projectId: "clone-front-end-43c84",
  storageBucket: "clone-front-end-43c84.appspot.com",
  messagingSenderId: "101138936985",
  appId: "1:101138936985:web:048a612a206fa60be53408",
  measurementId: "G-31VJ5WZ2FL"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
