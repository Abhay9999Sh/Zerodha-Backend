import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7ZN54H0W2hEuPGmDdHHnwxbqoTInKyoQ",
  authDomain: "zerodha-204e1.firebaseapp.com",
  projectId: "zerodha-204e1",
  storageBucket: "zerodha-204e1.firebasestorage.app",
  messagingSenderId: "959708331352",
  appId: "1:959708331352:web:e6bd1247b754f4b788792d",
  measurementId: "G-3S2JRZZH17",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
