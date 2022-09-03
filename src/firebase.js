// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvJtqH1Ty8mkymWbPkTZdARqvsoyFPDEA",
  authDomain: "chat-app-react-36172.firebaseapp.com",
  projectId: "chat-app-react-36172",
  storageBucket: "chat-app-react-36172.appspot.com",
  messagingSenderId: "969214286990",
  appId: "1:969214286990:web:447e401d79857037b9bddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export const db = getFirestore(app)