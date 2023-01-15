// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWK5ct7cfoozrf12UZuIChcGHKnb-KiNE",
  authDomain: "ecommerce-app1437.firebaseapp.com",
  projectId: "ecommerce-app1437",
  storageBucket: "ecommerce-app1437.appspot.com",
  messagingSenderId: "576561554946",
  appId: "1:576561554946:web:c2d52238551aed2dcfa91b",
  measurementId: "G-0GSV8THZJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

export { storage, auth, }