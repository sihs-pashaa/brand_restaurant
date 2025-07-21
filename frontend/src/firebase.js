// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS___uiLE2iIcBfcqWW8YnD4BTJUACzfs",
  authDomain: "koshary-el-tahrir-e4456.firebaseapp.com",
  projectId: "koshary-el-tahrir-e4456",
  storageBucket: "koshary-el-tahrir-e4456.firebasestorage.app",
  messagingSenderId: "670579418142",
  appId: "1:670579418142:web:f4d79378d348487639fa0f",
  measurementId: "G-QMN1NFSF13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);