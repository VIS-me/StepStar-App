import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, increment, arrayUnion } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6XgHahHPQ2X0G98sMVGRd-68LigZK4_Q",
  authDomain: "stepstarapp.firebaseapp.com",
  projectId: "stepstarapp",
  storageBucket: "stepstarapp.firebasestorage.app",
  messagingSenderId: "515498492922",
  appId: "1:515498492922:web:76255dfa72995e03261a43",
  measurementId: "G-ZFDEF5XB57"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc, updateDoc, increment, arrayUnion };
