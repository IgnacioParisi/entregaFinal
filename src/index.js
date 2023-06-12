import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLs5pL0zKwTt-9JRyCg0zw5vJhMfL2LAM",
  authDomain: "cava-selecta.firebaseapp.com",
  projectId: "cava-selecta",
  storageBucket: "cava-selecta.appspot.com",
  messagingSenderId: "437169303343",
  appId: "1:437169303343:web:b52f58c1563ad09cf9fbda"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
