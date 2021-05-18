import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAh3mey3gsU-Ucn_kbeh5S1-di220_KmcQ",
    authDomain: "finsta-b49ce.firebaseapp.com",
    projectId: "finsta-b49ce",
    storageBucket: "finsta-b49ce.appspot.com",
    messagingSenderId: "787703923442",
    appId: "1:787703923442:web:bd3491ac13227562f7866b"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider, storage};