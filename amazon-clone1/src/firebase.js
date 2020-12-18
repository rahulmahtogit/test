import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0IihemFW3_mGaOyqh5UMgjBpG2mP2ZYw",
  authDomain: "clone-cd87c.firebaseapp.com",
  projectId: "clone-cd87c",
  storageBucket: "clone-cd87c.appspot.com",
  messagingSenderId: "972169154317",
  appId: "1:972169154317:web:58d55f5d6a9d085e266a44",
  measurementId: "G-3LV5GL959N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
