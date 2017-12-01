import {combineReducers} from 'redux';
import {SET_SEARCH} from '../actions/types';

function search(state = null, action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.search;
    default:
      return state;
  }
}

const filterReducer = combineReducers({search});

export default filterReducer;
