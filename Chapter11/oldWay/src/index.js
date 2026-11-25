import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Book section 9.2: paste YOUR OWN values from the Firebase console here.
// databaseURL is required for the Realtime Database; copy it from Build > Realtime Database.
var firebaseConfig = {
  apiKey: "AIzaSyAMrdedmkvxK7lf-d1qPDIV8rEedaLDryg",
  authDomain: "codecollege-ba699.firebaseapp.com",
  databaseURL: "https://codecollege-ba699-default-rtdb.firebaseio.com/",
  projectId: "codecollege-ba699",
  storageBucket: "codecollege-ba699.firebasestorage.app",
  messagingSenderId: "611011540444",
  appId: "1:611011540444:web:51e18f590fc7b4093b8b19"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
