// third party libraries
import isEmpty from 'lodash/isEmpty';

// action constants
import { SET_CURRENT_USER } from '../constants';

// initialState
import initialState from '../store/initialState';

// reducer
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuth: !isEmpty(action.payload),
        user: action.payload.user
      };
    default:
      return {
        ...state,
        login: loginReducer(state.login, action),
        signup: signupReducer(state.signup, action)
      };
  }
};

export default authReducer;
