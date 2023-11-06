// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYBuzvnwixlbMpZQ62Q0jdBsNg0eGplwo",
  authDomain: "dishdynamo-c649f.firebaseapp.com",
  projectId: "dishdynamo-c649f",
  storageBucket: "dishdynamo-c649f.appspot.com",
  messagingSenderId: "93143910636",
  appId: "1:93143910636:web:24055a0d5531eae761fdc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
