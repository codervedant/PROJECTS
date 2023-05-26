import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBcaEbsscUuIskPGWYlgrBZLknmbbLI31M',
  authDomain: 'school-attendance-830a0.firebaseapp.com',
  projectId: 'school-attendance-830a0',
  storageBucket: 'school-attendance-830a0.appspot.com',
  messagingSenderId: '1023448375009',
  databaseURL: 'https://school-attendance-830a0-default-rtdb.firebaseio.com/',
  appId: '1:1023448375009:web:f60bf82c4c8ba8f95da1a0',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
