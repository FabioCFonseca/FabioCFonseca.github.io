import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDSYn778BzMlQB8h0GgF-37Apl1ZfK_BSw",
  authDomain: "personal-box-58725.firebaseapp.com",
  projectId: "personal-box-58725",
  storageBucket: "personal-box-58725.appspot.com",
  messagingSenderId: "911763824999",
  appId: "1:911763824999:web:80ef7859e533c301624fc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
