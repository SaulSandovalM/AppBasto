import {store} from '../App';
import firebase from '../components/firebase/Firebase';

const db = firebase.database().ref('dev');

//esta accion crea o consgiue el perfil del usuario
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS';

function setUserSuccess(profile) {
  return {type: SET_USER_SUCCESS, profile}
}

function getOrCreateProfile(user) {
  db.child('users').child(user.uid).on('value', s => {
    if (!s.val()) {
      let profile = {
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
        email: user.email,
        phoneNumber: user.phoneNumber
      }
      db.child("users").child(user.uid).set(profile);
      store.dispatch(setUserSuccess(profile))
    } else {
      store.dispatch(setUserSuccess(s.val()));
    }
  });
}

export const setUser = (user) => {
  //localStorage.setItem("user", JSON.stringify(user));
  getOrCreateProfile(user);
};
