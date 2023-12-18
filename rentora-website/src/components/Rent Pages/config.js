// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_iZXO6XkCwtbIivkX8M4MPv0EYmGyFtY",
  authDomain: "rentora-dbfa3.firebaseapp.com",
  databaseURL: "https://rentora-dbfa3-default-rtdb.firebaseio.com",
  projectId: "rentora-dbfa3",
  storageBucket: "rentora-dbfa3.appspot.com",
  messagingSenderId: "883085066161",
  appId: "1:883085066161:web:56aa053af3995f2c080790",
  measurementId: "G-VPC8ZP5EJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
export { firebase, db };