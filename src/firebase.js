// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqzBOM5NNCptCvqPwKPnF0bIecCAIlUjs",
  authDomain: "react-ent.firebaseapp.com",
  projectId: "react-ent",
  storageBucket: "react-ent.appspot.com",
  messagingSenderId: "866232880002",
  appId: "1:866232880002:web:cc5862bbd65099b0329d9b",
  measurementId: "G-VPLNRMCYQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;