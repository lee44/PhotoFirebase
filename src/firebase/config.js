import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBrrgj2TaQbhULt9K7Y6Tuz5hlx-ojYnxo",
  authDomain: "photobase-6ffa3.firebaseapp.com",
  projectId: "photobase-6ffa3",
  storageBucket: "photobase-6ffa3.appspot.com",
  messagingSenderId: "849285723119",
  appId: "1:849285723119:web:b9c864b99d8f3757003c1a",
  measurementId: "G-RJFGCZPFXM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//
const auth = firebase.auth();
//Access to firebase storage
const projectStorage = firebase.storage();
//Access to firebase database
const projectFirestore = firebase.firestore();
//Grab the server generated timestamp for data pushed to database
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, projectStorage, projectFirestore, timestamp };
