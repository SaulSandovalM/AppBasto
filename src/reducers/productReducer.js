import {combineReducers} from 'redux';

function allProducts(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const productReducer = combineReducers({allProducts});

export default productReducer;
