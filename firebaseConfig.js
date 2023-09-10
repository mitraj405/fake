
import { initializeApp } from "firebase/app";
import {getFirestore, serverTimestamp } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlJ7PtVMjah8xpb2OXXmpxCJKB90EMRHw",
  authDomain: "saptkrishi-8eb12.firebaseapp.com",
  projectId: "saptkrishi-8eb12",
  storageBucket: "saptkrishi-8eb12.appspot.com",
  messagingSenderId: "567251781044",
  appId: "1:567251781044:web:f8ca03e2924b094c001ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const timestamp = serverTimestamp()
export {app, database, timestamp}