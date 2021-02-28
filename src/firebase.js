import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqxK0MYcDelR_Te3F7gNlnJ45g-AqAoXI",
    authDomain: "slack-clone-311de.firebaseapp.com",
    projectId: "slack-clone-311de",
    storageBucket: "slack-clone-311de.appspot.com",
    messagingSenderId: "17213227215",
    appId: "1:17213227215:web:57540456ddef7138bd77ba",
    measurementId: "G-DBXM1CNM32"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth , provider};
export default db;