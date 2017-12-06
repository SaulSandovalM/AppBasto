export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_AMOUNT = 'ADD_AMOUNT';
export const SUBSTRACT_AMOUNT = 'SUBSTRACT_AMOUNT';
export const DELETE_ITEM = 'DELETE_ITEM';

import firebase from '../components/firebase/Firebase';

db = firebase.database().ref();

export function addToCart(item) {
  return {type: ADD_TO_CART, item};
}

export function addAmount(item) {
  return {type: ADD_AMOUNT, item}

}

export function substractAmount(item) {
  return {type: SUBSTRACT_AMOUNT, item}
}

export function deleteItem(item) {
  return {type: DELETE_ITEM, item}
}

export const saveOrder = (order) => (dispatch, getState) => {
  let updates = {};
  let key;
  if (order.id)
    key = order.id;
  else
    key = db.push().key;
  order.id = key;
  updates[`dev/orders/${key}`] = order;
  return db.update(updates).then((snap) => {
    return Promise.resolve(snap)
  }).catch((error) => {
    console.log(error);
    return Promise.reject(error);
  })
};
