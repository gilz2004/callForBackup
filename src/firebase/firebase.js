import firebase from 'firebase';
import secrets from '../../secrets.development';

var firebaseConfig = {
  apiKey: secrets.key,
  authDomain: secrets.authDomain,
  databaseURL: secrets.dbUrl,
  projectId: 'call4help-568bd',
  storageBucket: 'call4help-568bd.appspot.com',
  messagingSenderId: '280797957279',
  appId: secrets.appId,
  measurementId: 'G-5Z9287R553',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

export const writeData = async (post) => {
  try {
    await database.ref('posts/' + post.id).set(post);
  } catch (err) {
    console.error('nothing was written to the database');
  }
};

export const listenToData = (posts) => database.ref(`${posts}`);
export const removePostFromDb = (id) => database.ref('posts/' + id).remove();
