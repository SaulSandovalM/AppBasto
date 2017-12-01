import firebase from '../components/firebase/Firebase';
import * as fireMethods from '../components/firebase/Firebase';

export function loadListaSuccess(lista) {
  return {type: 'LOAD_LISTA_SUCCESS', lista}
}

export function addItemListSuccess(item) {
  return {type: 'ADD_ITEM_LIST', item}
}

export function loadLista() {
  return function(dispatch, getState) {
    firebase.database().ref('lista').once("value").then(s => {
      let lista = [];
      const obj = s.val();
      for (let key in obj) {
        let nObj = obj[key];
        nObj['id'] = key;
        lista.push(nObj);
      }
      dispatch(loadListaSuccess(lista));
    }).catch(e => console.log(e))
  }
}

export function addItemList(item) {
  return function(dispatch) {
    fireMethods.saveItem(item).then(resItem => {
      dispatch.addItemListSuccess(resItem)
    })
  }
}
