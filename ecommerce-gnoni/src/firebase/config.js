import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCH5ETiraQWN3Zc16-MJGpwDHTccHTDM-0",
  authDomain: "ecommerce-gnoni-reactjs.firebaseapp.com",
  projectId: "ecommerce-gnoni-reactjs",
  storageBucket: "ecommerce-gnoni-reactjs.appspot.com",
  messagingSenderId: "717922929839",
  appId: "1:717922929839:web:18b6b46d0ef0c5d46a585a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app