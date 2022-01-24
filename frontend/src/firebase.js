// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3hM0FmJD5QBClV82FTnEkfleXJryeyag",
  authDomain: "pixel-art-portfolio.firebaseapp.com",
  projectId: "pixel-art-portfolio",
  storageBucket: "pixel-art-portfolio.appspot.com",
  messagingSenderId: "441103334073",
  appId: "1:441103334073:web:b4b9bd9779adc35e3bb968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export {app, storage};