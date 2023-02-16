import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAizRgKLsAMAs1CMlpICjd1ixD_EL-KNnI",
  authDomain: "netflix-7998b.firebaseapp.com",
  projectId: "netflix-7998b",
  storageBucket: "netflix-7998b.appspot.com",
  messagingSenderId: "595387563259",
  appId: "1:595387563259:web:848c08fc7924676574845e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;