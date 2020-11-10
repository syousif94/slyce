import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCBOPBVOvUokmDX5XZJ-DQ2RD0wlNcK4OQ',
  authDomain: 'slyce-panoramas.firebaseapp.com',
  databaseURL: 'https://slyce-panoramas.firebaseio.com',
  projectId: 'slyce-panoramas',
  storageBucket: 'slyce-panoramas.appspot.com',
  messagingSenderId: '752191005170',
  appId: '1:752191005170:web:6966eda6b825b2a0190b6b',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
