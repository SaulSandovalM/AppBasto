import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAm3vwjUC-pSCOnwRZTirbXP-PKJ8NJ8dc",
  authDomain: "planb-ab808.firebaseapp.com",
  databaseURL: "https://planb-ab808.firebaseio.com",
  projectId: "planb-ab808",
  storageBucket: "planb-ab808.appspot.com",
  messagingSenderId: "558603502686"
};

firebase.initializeApp(config);
export const firebaseAuth = firebase.auth()
export default firebase;
