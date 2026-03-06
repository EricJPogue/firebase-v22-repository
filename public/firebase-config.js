// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, getDocs, connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, connectStorageEmulator } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2katNo4ixKkLz5vXXBbEtWIEx-6ADhj0",
  authDomain: "fir-v22-project.firebaseapp.com",
  projectId: "fir-v22-project",
  storageBucket: "fir-v22-project.firebasestorage.app",
  messagingSenderId: "987697547072",
  appId: "1:987697547072:web:9566d9f2de643523a05ca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Only connect to emulators when running locally
if (location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);

}

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
export { db, doc, setDoc, collection, getDocs };
export { storage, ref, uploadBytes, getDownloadURL, listAll } 

