import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDWNpQPvXcVKATARqO9rdmjUp-RsmWlsCg",
    authDomain: "whatsapp-clone-e9d95.firebaseapp.com",
    projectId: "whatsapp-clone-e9d95",
    storageBucket: "whatsapp-clone-e9d95.appspot.com",
    messagingSenderId: "383242505870",
    appId: "1:383242505870:web:120228b7480d66ef9103df",
    measurementId: "G-8E6CY6H5FW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;