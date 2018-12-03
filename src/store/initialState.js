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
    isAuth: false
  }
};
export default initialState;
