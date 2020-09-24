import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBHIKqxgnkOYGgoEYn9g3rpCgpmbP9c4a0",
  authDomain: "victorakaps-project-manager.firebaseapp.com",
  databaseURL: "https://victorakaps-project-manager.firebaseio.com",
  projectId: "victorakaps-project-manager",
  storageBucket: "victorakaps-project-manager.appspot.com",
  messagingSenderId: "878790415077",
  appId: "1:878790415077:web:05d569f0628770ed013a0c",
  measurementId: "G-E8YMM1Y98N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
