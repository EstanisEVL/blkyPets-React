import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

