// third party libraries
import http from 'axios';

// action constants
import { userConstants, SET_LOADING_STATE } from '../constants';

// auth action
import setLoggedInUser from './authAction';

const loginSuccess = user => ({
  type: userConstants.LOGIN_SUCCESS,
  payload: user
});

const loginFailure = error => ({
  type: userConstants.LOGIN_FAILURE,
  payload: { error }
});

const isLoading = () => ({
  type: SET_LOADING_STATE,
  payload: true
});

const loginAction = userData => dispatch => {
  dispatch(isLoading());
  const url = process.env.SERVER_URL || '';
  return http
    .post(`${url}/api/v1/auth/login`, userData)
    .then(({ data }) => {
      console.log('result===>', data);
      dispatch(loginSuccess(data));
      dispatch(setLoggedInUser(data));
      localStorage.setItem('myDiaryToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return true;
    })
    .catch(({ response }) => {
      dispatch(loginFailure(response));
      return false;
    });
};
export default loginAction;
