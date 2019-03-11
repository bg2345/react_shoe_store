import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBodDW3Te76XEeDU1wJVt175syLEiWRbXA",
    authDomain: "shoe-store-bg.firebaseapp.com",
    databaseURL: "https://shoe-store-bg.firebaseio.com",
    projectId: "shoe-store-bg",
    storageBucket: "shoe-store-bg.appspot.com",
    messagingSenderId: "796793408407"
  };
firebase.initializeApp(config);

export default firebase;
