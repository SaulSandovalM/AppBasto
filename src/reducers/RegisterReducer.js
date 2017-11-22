import {EMAIL_CHANGEDREG, PASSWORD_CHANGEDREG, LOGIN_USER_SUCCESSREG, LOGIN_USER_FAILREG, LOGIN_USERREG} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default regis = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGEDREG:
            return {
                ...state,
                email: action.payload
            };

        case PASSWORD_CHANGEDREG:
            return {
                ...state,
                password: action.payload
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
