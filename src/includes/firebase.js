import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDyPYKDthezyqs52rIjAwX8JdKG6yJ4waU',
  authDomain: 'music-28a93.firebaseapp.com',
  projectId: 'music-28a93',
  appId: '1:542505348009:web:300f8b05571760957eb2b8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
