import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC43lApAvKn365PO2zPRn4fHdCeo8C4CYQ",
  authDomain: "motyamusic-7d0f8.firebaseapp.com",
  projectId: "motyamusic-7d0f8",
  storageBucket: "motyamusic-7d0f8.appspot.com",
  messagingSenderId: "917754606338",
  appId: "1:917754606338:web:caf1f4d95d455de6b0481b",
  measurementId: "G-JK0CPS6HRF"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage();