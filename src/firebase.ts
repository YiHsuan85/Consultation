import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, collection, addDoc, updateDoc, doc, query, where, onSnapshot, orderBy, Timestamp, deleteDoc, getDocFromServer } from 'firebase/firestore';

// 移除 import firebaseConfig from '../firebase-applet-config.json';
// 改為直接定義並從環境變數讀取
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

console.log("Firebase Key Loaded:", firebaseConfig.apiKey ? "Exist" : "Empty");
console.log("Value starts with:", String(firebaseConfig.apiKey).substring(0, 5));

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app, "ai-studio-1f35997a-3f5f-44c0-b4bc-cf324207c935");
export { db };
export const googleProvider = new GoogleAuthProvider();

// Test connection
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

export { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  Timestamp,
  deleteDoc
};
export type { User };
