import {SET_USER_SUCCESS} from '../actions/userActions';
import {combineReducers} from 'redux';

function profile(state={}, action){
  switch(action.type){
    case SET_USER_SUCCESS:
      return action.profile;
    default:
      return state;
  }
}

export const userReducer = combineReducers({
  profile
});
