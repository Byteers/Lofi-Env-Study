import firebase from "firebase/app";
// import 'firebase/i
import "firebase/auth"; // for authentication
import "firebase/firestore"; // for cloud firestore
import "firebase/storage"; // for storage
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJgjsKpSizSDqBe3M0cpRIwCddAU6lbLM",
  authDomain: "lofi-env.firebaseapp.com",
  projectId: "lofi-env",
  storageBucket: "lofi-env.appspot.com",
  messagingSenderId: "782412966570",
  appId: "1:782412966570:web:0061c7d0141e4b39617ed3",
  measurementId: "G-JQ01HLNSK1",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
export { auth, provider, storage };
export default db;
