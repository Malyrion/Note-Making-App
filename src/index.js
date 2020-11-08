import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';

require('firebase/firestore');

  const firebaseConfig = {
    apiKey: "AIzaSyCCHSNCCAyjhyJ-weUYvMb-v-55gdHWkyY",
    authDomain: "notemaker-89746.firebaseapp.com",
    databaseURL: "https://notemaker-89746.firebaseio.com",
    projectId: "notemaker-89746",
    storageBucket: "notemaker-89746.appspot.com",
    messagingSenderId: "305445934595",
    appId: "1:305445934595:web:e7930bc2026cd7937aa036",
    measurementId: "G-NFT1EFMYPF"
  };

  firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
