// third party libraries
import http from 'axios';

// action constants
import { userConstants } from '../constants';

// auth action
import setLoggedInUser from './authAction';

const loginSuccess = () => ({
  type: userConstants.LOGIN_SUCCESS,
});

const loginFailure = error => ({
  type: userConstants.LOGIN_FAILURE,
  payload: { error }
});

const isLoading = () => ({
  type: userConstants.LOGIN_REQUEST,
  payload: true
});

const loginAction = userData => dispatch => {
  dispatch(isLoading());
  const url = process.env.SERVER_URL || '';
  return http
    .post(`${url}/api/v1/auth/login`, userData)
    .then(({ data }) => {
      console.log('data====>', data);
      dispatch(loginSuccess());
      dispatch(setLoggedInUser(data));
    })
    .catch(({ response }) => {
      dispatch(loginFailure(response));
      return false;
    });
};
export default loginAction;
