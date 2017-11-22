import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMAIL_CHANGEDREG, PASSWORD_CHANGEDREG, LOGIN_USER_SUCCESSREG, LOGIN_USER_FAILREG, LOGIN_USERREG} from './types';

export const emailChangedreg = (text) => {
    return {type: EMAIL_CHANGEDREG, payload: text};
};

export const passwordChangedreg = (text) => {
    return {type: PASSWORD_CHANGEDREG, payload: text};
};

export const loginUserreg = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USERREG});

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccessreg(dispatch, user)).catch(() => loginUserFailreg(dispatch))
    };
};

const loginUserFailreg = (dispatch) => {
    dispatch({type: LOGIN_USER_FAILREG});
};

const loginUserSuccessreg = (dispatch, user) => {
    dispatch({type: LOGIN_USER_SUCCESSREG, payload: user});

    Actions.Principal();
};
