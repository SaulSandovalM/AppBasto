import {EMAIL_CHANGEDREC, VEMAIL_CHANGEDREC, SEND_EMAIL, SEND_EMAIL_SUCCESS, SEND_EMAIL_FAIL} from '../actions/types';

const INITIAL_STATE = {
  recov: {
    emailrec: '',
    veriemail: '',
    error: '',
    loading: false
  }
};

export default recover = (state = INITIAL_STATE.recov, action) => {
  switch (action.type) {
    case EMAIL_CHANGEDREC:
      return {
        ...state,
        emailrec: action.payload
      }

    case VEMAIL_CHANGEDREC:
      return {
        ...state,
        veriemail: action.payload
      }

    case SEND_EMAIL:
      return {
        ...state,
        loading: true,
        error: ''
      }

    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        veriemail: '',
        loading: false,
        error: '',
        emailrec: ''
      }

    case SEND_EMAIL_FAIL:
      return {
        ...state,
        error: 'Autenticación Fallida.',
        veriemail: '',
        loading: false
      }
    default:
      return state
  }
}
