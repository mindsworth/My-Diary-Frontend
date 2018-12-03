/**
 * @desc the initial state on the application
 */
const initialState = {
  auth: {
    user: {},
    signup: {
      isLoading: false,
      isRegistered: false,
      errorResponse: null
    },
    login: {
      isLoading: false,
      errorResponse: null,
      isAuth: false
    },
    isAuth: false
  }
};
export default initialState;
