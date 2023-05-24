import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyAdG9U4K5w8tWe462QiEr9CyT559NpbDgQ',
  authDomain: 'complaint-forum-671c7.firebaseapp.com',
  projectId: 'complaint-forum-671c7',
  storageBucket: 'complaint-forum-671c7.appspot.com',
  messagingSenderId: '554615392612',
  appId: '1:554615392612:web:f2b084b2db1af7b5985271',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
