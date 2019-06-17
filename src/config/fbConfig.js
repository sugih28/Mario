import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCuqZQTM2VHZecLzr9yIbROpeKfE1sGqiw",
    authDomain: "marioplan-ikp.firebaseapp.com",
    databaseURL: "https://marioplan-ikp.firebaseio.com",
    projectId: "marioplan-ikp",
    storageBucket: "marioplan-ikp.appspot.com",
    messagingSenderId: "1087169892479",
    appId: "1:1087169892479:web:52f535d007263871"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;