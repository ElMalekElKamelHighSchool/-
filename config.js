import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  // ضَع بيانات مشروعك هنا (hazoma-60ed2)
  apiKey: "YOUR_API_KEY",
  authDomain: "hazoma-60ed2.firebaseapp.com",
  projectId: "hazoma-60ed2",
  storageBucket: "hazoma-60ed2.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
