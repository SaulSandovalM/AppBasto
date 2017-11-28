import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import filterReducer from './filterReducer';
import productReducer from './productReducer';
import RegisterReducer from "./RegisterReducer";
import RecoverReducer from "./RecoverReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    filter: filterReducer,
    products:productReducer,
    regis:RegisterReducer,
    recover : RecoverReducer
});
export default rootReducer;
