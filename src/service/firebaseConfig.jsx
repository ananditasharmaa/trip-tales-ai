// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIlsVf4DFfjMOEhJjCKOcYaA_QaITj9gU",
  authDomain: "project1-98120.firebaseapp.com",
  projectId: "project1-98120",
  storageBucket: "project1-98120.firebasestorage.app",
  messagingSenderId: "86740979714",
  appId: "1:86740979714:web:13fe53c13addda6703171b",
  measurementId: "G-NL1DVJ5114"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);