// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e6bd9.firebaseapp.com",
  projectId: "mern-blog-e6bd9",
  storageBucket: "mern-blog-e6bd9.appspot.com",
  messagingSenderId: "391113547031",
  appId: "1:391113547031:web:51197a34e2e46b12d96b52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);