import {getAuth} from "firebase/auth"
import { initializeApp } from "@firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDeUsi9NM-sZKMBXkdSYLiUl4AWWwn14IQ",
    authDomain: "netflix-clone-644ea.firebaseapp.com",
    databaseURL: "https://netflix-clone-644ea-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-644ea",
    storageBucket: "netflix-clone-644ea.appspot.com",
    messagingSenderId: "885092443978",
    appId: "1:885092443978:web:5b40fbb01c0be6035f03b3"
  };

export   const app= initializeApp(firebaseConfig);
export  const auth =getAuth();
export const db = getDatabase(app);
