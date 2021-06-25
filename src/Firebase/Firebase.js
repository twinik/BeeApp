import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD50bVrMQzeyCcAZ3GDDP8dzT6MYZ1z8nA",
  authDomain: "servbee-1f3a6.firebaseapp.com",
  projectId: "servbee-1f3a6",
  storageBucket: "servbee-1f3a6.appspot.com",
  messagingSenderId: "181242696518",
  appId: "1:181242696518:web:93652e010acab818580b47"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase