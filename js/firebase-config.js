// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmEE5mEU0K7NqX757HW7byqp5pAgQj7jI",
  authDomain: "bot-telegram-46355.firebaseapp.com",
  projectId: "bot-telegram-46355",
  storageBucket: "bot-telegram-46355.appspot.com",
  messagingSenderId: "626773851070",
  appId: "1:626773851070:web:472b43d40e57318cb9d7ef",
  measurementId: "G-6B4EHF7C40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);