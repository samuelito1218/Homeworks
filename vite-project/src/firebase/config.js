// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2W6Tr84y-BF6P_6Uln-pGOZVHfYw9EJM",
  authDomain: "proyecto2-c3447.firebaseapp.com",
  projectId: "proyecto2-c3447",
  storageBucket: "proyecto2-c3447.firebasestorage.app",
  messagingSenderId: "348986329121",
  appId: "1:348986329121:web:15a8e4eeb084954f9dfb60",
  measurementId: "G-FYMN5KTT4G"
};

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"  
});


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const realtimeDb = getDatabase(app); 

