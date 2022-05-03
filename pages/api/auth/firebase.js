// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArUm0BIPV-iWUnwG1xtrYXERMiqVwVBdw",
  authDomain: "instagram-clone-53ecf.firebaseapp.com",
  projectId: "instagram-clone-53ecf",
  storageBucket: "instagram-clone-53ecf.appspot.com",
  messagingSenderId: "167941544002",
  appId: "1:167941544002:web:3726fb890b1e951d4675db",
  measurementId: "G-FT4LXSRREN"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };