import firebase from 'firebase';

//TODO : REMOVE API KEY

var firebaseConfig = {
  apiKey: 'AIzaSyBNzxifhmblIsUNEn9CNyyQRc93q6HF3ww',
  authDomain: 'call4help-568bd.firebaseapp.com',
  databaseURL: 'https://call4help-568bd.firebaseio.com',
  projectId: 'call4help-568bd',
  storageBucket: 'call4help-568bd.appspot.com',
  messagingSenderId: '280797957279',
  appId: '1:280797957279:web:4c86a7abf1b5106c0ca6aa',
  measurementId: 'G-5Z9287R553',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

export const writeData = async (post) => {
  try {
    database.ref('posts/' + post.id).set(post);
  } catch (err) {
    console.error('nothing was written to the database');
  }
};

export const listenToData = (posts) => database.ref(`${posts}/`);
export const removePostFromDb = (id) => database.ref('posts/' + id).remove();
