import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAC0tKQah4aP08lIsSrQ7fo3iANac5fG4",
  authDomain: "adam-dfe4e.firebaseapp.com",
  databaseURL: "https://adam-dfe4e-default-rtdb.firebaseio.com",
  projectId: "adam-dfe4e",
  storageBucket: "adam-dfe4e.firebasestorage.app",
  messagingSenderId: "41649038563",
  appId: "1:41649038563:web:48a5e2eb5b10ff966291d6",
  measurementId: "G-907RVW6D07"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function saveContact(form) {
  return addDoc(collection(db, "contacts"), { ...form, timestamp: Timestamp.now() });
}
