import { initializeApp } from "firebase/app"; 
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDYvt8Z76QdcJj_C9hPygGxA4qXMI3r-P4",
    authDomain: "eatease-87ab6.firebaseapp.com",
    projectId: "eatease-87ab6",
    storageBucket: "eatease-87ab6.appspot.com",
    messagingSenderId: "1035541485789",
    appId: "1:1035541485789:web:71ea767147803a4f812334",
    measurementId: "G-JFHF1PN1L4"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);