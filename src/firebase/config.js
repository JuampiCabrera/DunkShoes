import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvRR7cTNEEAxE05ZOv_zsLYUu2dIv_npA",
  authDomain: "dunk-shoes.firebaseapp.com",
  projectId: "dunk-shoes",
  storageBucket: "dunk-shoes.firebasestorage.app",
  messagingSenderId: "595022466948",
  appId: "1:595022466948:web:7d35c051e2600da3b8d7d1"
};

export const app = initializeApp(firebaseConfig);