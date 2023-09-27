import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAKT6ZB7E2wq5q8jKrEzRzkiTgICKYK4Mk",
  authDomain: "crud-8635e.firebaseapp.com",
  projectId: "crud-8635e",
  storageBucket: "crud-8635e.appspot.com",
  messagingSenderId: "828594749150",
  appId: "1:828594749150:web:81bc63db0ab77360c38c4f"
};
const app = initializeApp(firebaseConfig);
const db = getStorage(app, "gs://crud-8635e.appspot.com");

export default db;