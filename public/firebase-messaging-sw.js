importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBa9A9hDLtWDLSlpYuSfytm0l7AHVGDWC8",
    authDomain: "quiz-app-pwa-a6503.firebaseapp.com",
    databaseURL: "https://quiz-app-pwa-a6503.firebaseio.com",
    projectId: "quiz-app-pwa-a6503",
    storageBucket: "quiz-app-pwa-a6503.appspot.com",
    messagingSenderId: "945339594821",
    appId: "1:945339594821:web:739e12eea9e216ab6c0b2c"
  });

  // firebase.initializeApp(firebaseConfig);
  firebase.messaging();
