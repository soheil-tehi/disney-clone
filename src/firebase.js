import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxsQyWvB-65KW57wurun7NLGhHDmH_t20",
    authDomain: "disney-588c9.firebaseapp.com",
    projectId: "disney-588c9",
    storageBucket: "disney-588c9.appspot.com",
    messagingSenderId: "731116653639",
    appId: "1:731116653639:web:b9f8584f6a3080f7853562"
  };
  
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;