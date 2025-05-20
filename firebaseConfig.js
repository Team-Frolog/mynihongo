// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcs2E3lxGbqet9QLsI-Nj9AJNltlV5eW0",
  authDomain: "mynihongo-5762d.firebaseapp.com",
  projectId: "mynihongo-5762d",
  storageBucket: "mynihongo-5762d.firebasestorage.app",
  messagingSenderId: "439324955389",
  appId: "1:439324955389:web:0be4a5dc03d0853682a494",
  measurementId: "G-C778YZWJEW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
