import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from '../actions/types';

const INITIAL_STATE = {
  logi: {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
  },
};

export default auth = (state = INITIAL_STATE.logi, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };

    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };

    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Autenticación Fallida.',
        password: '',
        loading: false
      };

    default:
      return state;
  }
}
