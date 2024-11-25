
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaPJRu9WAueCtrR3pqbEY_Se6GmTWlHtE",
  authDomain: "nextstepinsight-da9f0.firebaseapp.com",
  projectId: "nextstepinsight-da9f0",
  storageBucket: "nextstepinsight-da9f0.firebasestorage.app",
  messagingSenderId: "97302954198",
  appId: "1:97302954198:web:d8a28126d3efbe2a74c977",
  measurementId: "G-PH0FK1K9MF"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);