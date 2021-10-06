import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "*",
  authDomain: "*",
  projectId: "*",
  storageBucket: "*",
  messagingSenderId: "*",
  appId: "*"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
