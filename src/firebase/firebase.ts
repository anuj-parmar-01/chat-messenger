
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVL36zTuj7pzJ5sEMx4Bvsk_s1hgH5oY4",
  authDomain: "chat-messenger-d681d.firebaseapp.com",
  projectId: "chat-messenger-d681d",
  storageBucket: "chat-messenger-d681d.appspot.com",
  messagingSenderId: "465662034720",
  appId: "1:465662034720:web:181d94cc32355ef8abcd45"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(firebaseApp);

export { auth, db };