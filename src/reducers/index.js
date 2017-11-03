import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import filterReducer from './filterReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    filter: filterReducer,
    products:productReducer
});
export default rootReducer;
