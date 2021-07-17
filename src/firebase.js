import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCOMEh_9m7cY1pkD8nOy7nkV1WjUSC3PA",
  authDomain: "mcity-97e39.firebaseapp.com",
  projectId: "mcity-97e39",
  storageBucket: "mcity-97e39.appspot.com",
  messagingSenderId: "78793136082",
  appId: "1:78793136082:web:04dac5ff0b959b15b11a0b",
  measurementId: "G-WP4H98E94X",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export { firebase };

// admin@demo.com
// admin123
