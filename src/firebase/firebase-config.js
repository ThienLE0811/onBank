import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtDLOsNiqHhPga5iJCekX8TtQHmtKcZ_o",
  authDomain: "on-bank-vn.firebaseapp.com",
  projectId: "on-bank-vn",
  storageBucket: "on-bank-vn.appspot.com",
  messagingSenderId: "979445103187",
  appId: "1:979445103187:web:9bd2ac5b2d07dcf967a4a6",
  measurementId: "G-2L3HCY2401",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
