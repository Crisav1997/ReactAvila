// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwptPAZqtkOOurncz4lRMWAacFVCDroaE",
  authDomain: "backendavila.firebaseapp.com",
  projectId: "backendavila",
  storageBucket: "backendavila.appspot.com",
  messagingSenderId: "246015166385",
  appId: "1:246015166385:web:458b90e6bbcef1f8b91f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db =getFirestore(app)