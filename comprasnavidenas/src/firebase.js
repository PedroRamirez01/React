// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
/* import { getAuth } from "firebase/auth"; */

const firebaseConfig = {
  apiKey: "AIzaSyDHS6wwaidMoQMaP-fVChBZs_wNC_ghI4k",
  authDomain: "comprasnavidenas-4f3e8.firebaseapp.com",
  projectId: "comprasnavidenas-4f3e8",
  storageBucket: "comprasnavidenas-4f3e8.firebasestorage.app",
  messagingSenderId: "796194623953",
  appId: "1:796194623953:web:ddfa99b59e0cb29a5bd0f0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
/* const auth = getAuth(app); */
export { /* auth,  */db };