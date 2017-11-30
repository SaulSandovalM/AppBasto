import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBrx420xJAuQM1KPmYJnAxrMIaDfcQa1vI",
    authDomain: "eatfast-f5acf.firebaseapp.com",
    databaseURL: "https://eatfast-f5acf.firebaseio.com",
    projectId: "eatfast-f5acf",
    storageBucket: "eatfast-f5acf.appspot.com",
    messagingSenderId: "354773888658"
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth()
export default firebase;

export function saveItem(item) {
  return firebase.database().ref('lista').push(item).then(s => {
    item['id'] = s.key;
    return item;
  }).catch(e => console.log(e))
}
