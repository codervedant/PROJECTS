import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCeSI-rMad-YUxG3qhcmKZ6hzcl-KmgQfU',
  authDomain: 'knowledge-app-54bca.firebaseapp.com',
  databaseURL: 'https://knowledge-app-54bca-default-rtdb.firebaseio.com',
  projectId: 'knowledge-app-54bca',
  storageBucket: 'knowledge-app-54bca.appspot.com',
  messagingSenderId: '300605046398',
  appId: '1:300605046398:web:a5305851eb2dc9d346622f',
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
