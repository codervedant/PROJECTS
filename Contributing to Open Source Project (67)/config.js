import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJw5dnomvBrIiYGprAKVz3TCIXcWyiA1c",
  authDomain: "team-vote-11150.firebaseapp.com",
  projectId: "team-vote-11150",
  storageBucket: "team-vote-11150.appspot.com",
  messagingSenderId: "517111690907",
  databaseURL: 'https://team-vote-11150-default-rtdb.firebaseio.com/',
  appId: "1:517111690907:web:9e6e697c8f98a306f2383e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();