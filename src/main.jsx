import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl-T_kqKsCHmKadxP6F6i8ObT4ZyTVO9w",
  authDomain: "vibe-kpop.firebaseapp.com",
  projectId: "vibe-kpop",
  storageBucket: "vibe-kpop.appspot.com",
  messagingSenderId: "138853313363",
  appId: "1:138853313363:web:f19463105799fbdea4cfa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
