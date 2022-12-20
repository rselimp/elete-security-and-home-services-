// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGIneDiTI-ZeISqVIwxDdwd0s61kC4Z5w",
  authDomain: "security-and-home-services.firebaseapp.com",
  projectId: "security-and-home-services",
  storageBucket: "security-and-home-services.appspot.com",
  messagingSenderId: "812506449494",
  appId: "1:812506449494:web:69c9559f9bb43112739df7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;