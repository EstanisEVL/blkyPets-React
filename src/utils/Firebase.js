// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8CfhF-_-bKWY-p5pWgjYtSUjZuO9qyyU",
  authDomain: "e-commerce-d22ff.firebaseapp.com",
  projectId: "e-commerce-d22ff",
  storageBucket: "e-commerce-d22ff.appspot.com",
  messagingSenderId: "345312302004",
  appId: "1:345312302004:web:efc339081d2c5b8c8a58e1"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore();


