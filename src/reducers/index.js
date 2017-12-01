import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import filterReducer from './filterReducer';
import productReducer from './productReducer';
import RegisterReducer from "./RegisterReducer";
import RecoverReducer from './RecoverReducer';
import dataReducer from './dataReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  filter: filterReducer,
  products:productReducer,
  regis:RegisterReducer,
  recover : RecoverReducer,
  lista : dataReducer,
  cart: cartReducer
});
export default rootReducer;
