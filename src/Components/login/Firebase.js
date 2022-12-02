// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWcGeK9Y-MtbmlJTPUGvjnvEhhilzRpnw",
  authDomain: "react-authentication-pro-319d8.firebaseapp.com",
  projectId: "react-authentication-pro-319d8",
  storageBucket: "react-authentication-pro-319d8.appspot.com",
  messagingSenderId: "222273763203",
  appId: "1:222273763203:web:53a0ad23a71ee2a9fe68b6",
  measurementId: "G-QMGQ3B7FXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app);
export default app;