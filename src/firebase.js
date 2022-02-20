import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9MCwqZcWkwwgnG7fzc393-Yf0d7G9IQE",
  authDomain: "todo-app-eb5c2.firebaseapp.com",
  projectId: "todo-app-eb5c2",
  storageBucket: "todo-app-eb5c2.appspot.com",
  messagingSenderId: "640947041239",
  appId: "1:640947041239:web:d02cb5413fbedb69949192",
  measurementId: "G-PQ58TVKB0B"
})

const db = firebaseApp.firestore();

export default db;
