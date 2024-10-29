// Import the functions you need from the SDKs you need
/* import { getFirestore } from "firebase/firestore"; */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDezGpnRpj5V_WmloRqEZwN1LpUxbi4TgY",
  authDomain: "login-852ba.firebaseapp.com",
  projectId: "login-852ba",
  storageBucket: "login-852ba.appspot.com",
  messagingSenderId: "323927939005",
  appId: "1:323927939005:web:2ad6a40154b7ba940224d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const db = getFirestore(app); */
const auth = getAuth(app);
export { auth/* , db */ };