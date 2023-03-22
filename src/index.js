import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjMjqxIq5hyu0xnNZNAmnNJlnLNfwV8Lo",
  authDomain: "curso-react-diazlautaro.firebaseapp.com",
  projectId: "curso-react-diazlautaro",
  storageBucket: "curso-react-diazlautaro.appspot.com",
  messagingSenderId: "347038666931",
  appId: "1:347038666931:web:d9e0a3b29baef8694120c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


