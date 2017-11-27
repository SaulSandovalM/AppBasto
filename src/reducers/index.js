import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import filterReducer from './filterReducer';
import productReducer from './productReducer';
import {userReducer} from './userReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    filter: filterReducer,
    products:productReducer,
    user:userReducer
});
export default rootReducer;
