import { userConstants, SET_LOADING_STATE } from '../constants';
import initialState from '../store/initialState';

const loginReducer = (state = initialState.auth.login, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return {
        ...state,
        isLoading: true,
        errorResponse: null
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        errorResponse: action.payload,
        isLoading: false
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorResponse: null,
        isAuth: true
      };
    default:
      return state;
  }
};

export default loginReducer;
