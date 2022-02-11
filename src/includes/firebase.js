import { firebase } from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDyPYKDthezyqs52rIjAwX8JdKG6yJ4waU',
  authDomain: 'music-28a93.firebaseapp.com',
  projectId: 'music-28a93',
  storageBucket: 'music-28a93.appspot.com',
  appId: '1:542505348009:web:300f8b05571760957eb2b8',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
