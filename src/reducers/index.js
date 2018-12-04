import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  signup: signupReducer,
  login: loginReducer
});
