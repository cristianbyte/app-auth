import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyANM9gSp6KCwkEQ7pcRYV4B9Ha28ddz8dQ",
  authDomain: "react-auth-2c129.firebaseapp.com",
  projectId: "react-auth-2c129",
  storageBucket: "react-auth-2c129.appspot.com",
  messagingSenderId: "704275376103",
  appId: "1:704275376103:web:e47d053800537dfab0ff42"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)