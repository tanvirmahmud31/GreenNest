// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM9jEFSl4hCPki2106cqeDD3CyHEHV3ZA",
  authDomain: "greennest-f0115.firebaseapp.com",
  projectId: "greennest-f0115",
  storageBucket: "greennest-f0115.firebasestorage.app",
  messagingSenderId: "706835188248",
  appId: "1:706835188248:web:b9f25219e17a48642d116d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export default app;