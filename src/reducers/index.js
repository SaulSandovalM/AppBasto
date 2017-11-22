import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import filterReducer from './filterReducer';
import productReducer from './productReducer';
import RegisterReducer from "./RegisterReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    filter: filterReducer,
    products:productReducer,
    regis:RegisterReducer
});
export default rootReducer;
