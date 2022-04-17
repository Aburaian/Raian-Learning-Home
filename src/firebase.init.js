// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKXHP_Dp6XZW93HFywHVBnga1wmBduSuE",
  authDomain: "raian-learning-home.firebaseapp.com",
  projectId: "raian-learning-home",
  storageBucket: "raian-learning-home.appspot.com",
  messagingSenderId: "477297462848",
  appId: "1:477297462848:web:b71f0f0d1a0c707a9e59a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
