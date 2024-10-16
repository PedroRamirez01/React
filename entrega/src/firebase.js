// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3K2n5u3fQX1iwH7YNUU1ZiFbydvEJpDY",
  authDomain: "react-438e2.firebaseapp.com",
  projectId: "react-438e2",
  storageBucket: "react-438e2.appspot.com",
  messagingSenderId: "344313390661",
  appId: "1:344313390661:web:03f21c29c506f244f0252c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };