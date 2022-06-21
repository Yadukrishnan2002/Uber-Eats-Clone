// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase'
import firestore from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAREAa8kVaHspnrGDOBGoCh0b-T6qnMPqE",
    authDomain: "uber-eats-clone-9ac98.firebaseapp.com",
    projectId: "uber-eats-clone-9ac98",
    storageBucket: "uber-eats-clone-9ac98.appspot.com",
    messagingSenderId: "614133104392",
    appId: "1:614133104392:web:1e257898ea45782363f6bd"
  };

let app;
if(firebase.apps.length === 0)
 {
     app = firebase.initializeApp(firebaseConfig);
 }
 else{
     app = firebase.app()
 }

const auth = firebase.auth()
const db = firebase.firestore()

export {firebase, db, auth}