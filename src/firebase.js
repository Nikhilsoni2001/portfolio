import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDMxOzsAZAZKmv3CFxKTtJ_zvuSjHwvCB4",
  authDomain: "portfolio-43147.firebaseapp.com",
  projectId: "portfolio-43147",
  storageBucket: "portfolio-43147.appspot.com",
  messagingSenderId: "654229196825",
  appId: "1:654229196825:web:060a353480a308478b1a88",
  measurementId: "G-Y44HMFZ206",
});

var db = firebase.firestore();

export { db };
