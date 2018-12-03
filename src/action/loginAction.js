import http from 'axios';
import { userConstants, SET_LOADING_STATE } from '../constants';

const loginSuccess = user => ({
  type: userConstants.LOGIN_SUCCESS,
  payload: { user }
});

const loginFailure = error => ({
  type: userConstants.LOGIN_FAILURE,
  payload: { error }
});

const isLoading = () => ({
  type: SET_LOADING_STATE,
  payload: true
});

const loginAction = data => dispatch => {
  dispatch(isLoading());
  const url = process.env.SERVER_URL || '';
  return http
    .post(`${url}/api/v1/auth/login`, data)
    .then(result => {
      dispatch(loginSuccess(result.data));
      return true;
    })
    .catch(({ response }) => {
      dispatch(loginFailure(response));
    });
};
export default loginAction;
