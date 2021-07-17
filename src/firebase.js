import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { cityDb } from "./temp/m-city-export";

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

const DB = firebase.firestore();
const matchesCollection = DB.collection("matches");
const playersCollection = DB.collection("players");
const positionsCollection = DB.collection("positions");
const promotionsCollection = DB.collection("promotions");
const teamsCollection = DB.collection("teams");

// cityDb.matches.forEach((item) => {
//   matchesCollection.add(item);
// });

// cityDb.players.forEach((item) => {
//   playersCollection.add(item);
// });

// cityDb.positions.forEach((item) => {
//   positionsCollection.add(item);
// });

// cityDb.promotions.forEach((item) => {
//   promotionsCollection.add(item);
// });

cityDb.teams.forEach((item) => {
  teamsCollection.add(item);
});

export {
  firebase,
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection,
};

// admin@demo.com
// admin123
