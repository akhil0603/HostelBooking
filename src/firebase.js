import firebase from "firebase/app";

const firebaseConfig = {
 
  databaseURL: "https://hostelbooking-bf96a.firebaseio.com",
  apiKey: "AIzaSyDlG2GDbBCs4UG58HzIGC-rYHT3UoqdQRA",
  authDomain: "hostelbooking-bf96a.firebaseapp.com",
  projectId: "hostelbooking-bf96a",
  storageBucket: "hostelbooking-bf96a.appspot.com",
  messagingSenderId: "961677005462",
  appId: "1:961677005462:web:efb0c2accc671d5d68a8b7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider().providerId;
const fb = new firebase.auth.FacebookAuthProvider().providerId;
export { auth, google, firebaseApp, fb };
export default db;