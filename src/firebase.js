import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDeXTBVJNfs54py-g-NU1MQa9e9i-p7DCI",
    authDomain: "vrcafeportal-1f687.firebaseapp.com",
    projectId: "vrcafeportal-1f687",
    storageBucket: "vrcafeportal-1f687.appspot.com",
    messagingSenderId: "939485920859",
    appId: "1:939485920859:web:69a80c0731b1207cd5097e",
    measurementId: "G-9YDDJXK3L9"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const firebase = (app);