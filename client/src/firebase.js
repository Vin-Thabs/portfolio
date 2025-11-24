// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ1bmE3QAigeX307uJZ_e0F_N5cnPunPU",
  authDomain: "vin-thabs-portfolio.firebaseapp.com",
  projectId: "vin-thabs-portfolio",
  storageBucket: "vin-thabs-portfolio.firebasestorage.app",
  messagingSenderId: "845304351672",
  appId: "1:845304351672:web:f95b6f119185b6b46ddd4d",
  measurementId: "G-45NYS3DFGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);