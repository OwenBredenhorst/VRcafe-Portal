import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";

const root = ReactDOM.createRoot(document.getElementById('root'));



const firebaseConfig = {
    apiKey: "AIzaSyDeXTBVJNfs54py-g-NU1MQa9e9i-p7DCI",
    authDomain: "vrcafeportal-1f687.firebaseapp.com",
    projectId: "vrcafeportal-1f687",
    storageBucket: "vrcafeportal-1f687.appspot.com",
    messagingSenderId: "939485920859",
    appId: "1:939485920859:web:69a80c0731b1207cd5097e",
    measurementId: "G-9YDDJXK3L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
