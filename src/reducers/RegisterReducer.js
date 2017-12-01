import {
  EMAIL_CHANGEDREG,
  PASSWORD_CHANGEDREG,
  LOGIN_USER_SUCCESSREG,
  LOGIN_USER_FAILREG,
  LOGIN_USERREG,
  DIRECCION_CHANGEDREG,
  NAME_CHANGEDREG,
  INFO_USER,
  PHONE_CHANGEDRED
} from '../actions/types';

const INITIAL_STATE = {
  users: {
    email: '',
    password: '',
    names: '',
    direccion: '',
    error: '',
    loading: false,
    user: null,
    phone: ''
  }
}

export default regis = (state = INITIAL_STATE.users, action) => {
  switch (action.type) {
    case NAME_CHANGEDREG:
      return {
        ...state,
        names: action.payload
      }

    case PHONE_CHANGEDRED:
      return {
        ...state,
        phone: action.payload
      }

    case EMAIL_CHANGEDREG:
      return {
        ...state,
        email: action.payload
      };

    case INFO_USER:
      {
        return INITIAL_STATE
      };

    case PASSWORD_CHANGEDREG:
      return {
        ...state,
        password: action.payload
      };

    case DIRECCION_CHANGEDREG:
      return {
        ...state,
        direccion: action.payload
      };

    case LOGIN_USERREG:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case LOGIN_USER_SUCCESSREG:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };

    case LOGIN_USER_FAILREG:
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
