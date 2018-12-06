import { userConstants } from '../constants';
import initialState from '../store/initialState';

const loginReducer = (state = initialState.auth.login, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
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
        errorResponse: null
      };
    default:
      console.log('HellloLoginReducer');
      return state;
  }
};

export default loginReducer;
