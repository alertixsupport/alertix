// app.js - UNICO ARCHIVO - NO SE TOCA MAS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDt3ZApsQNMKtRvMoGlA1O1CBV1UlEiGM",
  authDomain: "alertix-729a8.firebaseapp.com",
  projectId: "alertix-729a8",
  storageBucket: "alertix-729a8.firebasestorage.app",
  messagingSenderId: "801938264767",
  appId: "1:801938264767:web:2a1dc473f33b5b38622c0a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const ADMIN_EMAIL = "alertixsupport@gmail.com";
