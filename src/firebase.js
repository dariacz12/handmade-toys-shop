import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "handmade-toys-shop.firebaseapp.com",
  projectId: "handmade-toys-shop",
  storageBucket: "handmade-toys-shop.appspot.com",
  messagingSenderId: "797432505624",
  appId: "1:797432505624:web:35bbcc572ba16e6c1aaa6d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
