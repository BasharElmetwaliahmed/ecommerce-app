// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLZNjbQRHQTuTp8U36zw_IDpxsSR0SFk",
  authDomain: "ecommerce-app-b320e.firebaseapp.com",
  projectId: "ecommerce-app-b320e",
  storageBucket: "ecommerce-app-b320e.appspot.com",
  messagingSenderId: "457046952247",
  appId: "1:457046952247:web:f4593413b9700cceb032b2",
  measurementId: "G-YF0XYQ2PGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db=getFirestore(app);