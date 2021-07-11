import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3Cin25zEQKftQGQYM93zrdjAhNGvjGrs",
  authDomain: "mcity-913ae.firebaseapp.com",
  projectId: "mcity-913ae",
  storageBucket: "mcity-913ae.appspot.com",
  messagingSenderId: "540438078063",
  appId: "1:540438078063:web:510799ebd896bdb6b8e39a",
  measurementId: "G-X23PNNGXLG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export { firebase };
