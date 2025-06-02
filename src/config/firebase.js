import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFCqx8nPLt8HvdPotbrnwa9OmvrlKUmy8",
  authDomain: "primetech-dashboard.firebaseapp.com",
  projectId: "primetech-dashboard",
  storageBucket: "primetech-dashboard.firebasestorage.app",
  messagingSenderId: "1078298611123",
  appId: "1:1078298611123:web:13445a532187a833c18fc6",
  measurementId: "G-EH5ST6JS22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
