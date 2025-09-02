// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQjHsBE-AmwUiN3EQVxt5S_3sWRkA1Qog",
  authDomain: "social-weather-app.firebaseapp.com",
  projectId: "social-weather-app",
  storageBucket: "social-weather-app.appspot.com", // corrected domain
  messagingSenderId: "358345632198",
  appId: "1:358345632198:web:ab08cd93514747de86aac7",
  measurementId: "G-GGHWX4PTHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export services
export { auth, db };
