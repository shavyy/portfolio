import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDtcJBxLqaLlOFbf3StwTcbakecf5yJQJ0",
  authDomain: "portfolio-b3f1f.firebaseapp.com",
  projectId: "portfolio-b3f1f",
  storageBucket: "portfolio-b3f1f.appspot.com",
  messagingSenderId: "432556055731",
  appId: "1:432556055731:web:93e0b54635acde7fa3a4c6",
  measurementId: "G-CVGXMBBDRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);