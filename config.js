import * as firebase from 'firebase'
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyDjHjbOBKDjEc5-i6hE3jIX1-O-QeKh9b8",
    authDomain: "will-app-f1cfc.firebaseapp.com",
    projectId: "will-app-f1cfc",
    storageBucket: "will-app-f1cfc.appspot.com",
    messagingSenderId: "517903938065",
    appId: "1:517903938065:web:23509196c58182da9ff7b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();