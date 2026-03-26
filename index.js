// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhKc7R97_ph2VQOq-uLMXFv-Wnyy0srXw",
  authDomain: "hestia-31da3.firebaseapp.com",
  databaseURL: "https://hestia-31da3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hestia-31da3",
  storageBucket: "hestia-31da3.firebasestorage.app",
  messagingSenderId: "577704397868",
  appId: "1:577704397868:web:e83026e730640a0bc1d589",
  measurementId: "G-ZY00R2GSX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
