import { userConstants } from '../constants';
import initialState from '../store/initialState';

const signupReducer = (state = initialState.auth.signup, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isRegistered: false,
        errorResponse: null
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        errorResponse: action.payload,
        isRegistered: false,
        isLoading: false
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorResponse: null,
        isRegistered: true
      };
    default:
      return state;
  }
};

export default signupReducer;
