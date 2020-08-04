import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export default function loadFirebase() {
  const config = {
    apiKey: 'AIzaSyCbsYU3TctbjSZSypteDWvgdW3JMT8PRfc',
    authDomain: 'calendar-assistant-f76b3.firebaseapp.com',
    databaseURL: 'https://calendar-assistant-f76b3.firebaseio.com',
    projectId: 'calendar-assistant-f76b3',
    storageBucket: 'calendar-assistant-f76b3.appspot.com',
    messagingSenderId: '690389191483',
    appId: '1:690389191483:web:e13769daa790493d09051e',
    measurementId: 'G-LNT2PREN73',
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  return firebase;
}
