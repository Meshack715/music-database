// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBn5L1eRfl4stDjfGa2_fkNQuEdpBljEA",
  authDomain: "music-management-89bd1.firebaseapp.com",
  projectId: "music-management-89bd1",
  storageBucket: "music-management-89bd1.appspot.com",
  messagingSenderId: "820301927405",
  appId: "1:820301927405:web:3ed22ce9d68a79cb0b0de4",
  measurementId: "G-3VJGMS8PFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);