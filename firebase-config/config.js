import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB2MS6pOKnlCY4RayOZcBvMCSgFp0xhGzs",
//   authDomain: "apper-nextjs-example-aea78.firebaseapp.com",
//   projectId: "apper-nextjs-example-aea78",
//   storageBucket: "apper-nextjs-example-aea78.appspot.com",
//   messagingSenderId: "322637061214",
//   appId: "1:322637061214:web:5991cc739bf35035b1e8cf"
// };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);