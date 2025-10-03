// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh9CXTAKLQ1ElBNEf70hqvZx59HCVNalk",
  authDomain: "tvfixgpt.firebaseapp.com",
  projectId: "tvfixgpt",
  storageBucket: "tvfixgpt.firebasestorage.app",
  messagingSenderId: "977597192105",
  appId: "1:977597192105:web:dd3777d9aa0c04c88ed6b8",
  measurementId: "G-HSRSM1LK6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();