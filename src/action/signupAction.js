import http from 'axios';
import { userConstants } from '../constants';

const signUpSuccess = user => ({
  type: userConstants.REGISTER_SUCCESS,
  payload: { user }
});

const signUpFailure = error => ({
  type: userConstants.REGISTER_FAILURE,
  payload: { error }
});

const isLoading = () => ({
  type: userConstants.LOGIN_REQUEST,
  payload: true
});

const signupAction = data => dispatch => {
  dispatch(isLoading());
  const url = process.env.SERVER_URL || '';
  return http
    .post(`${url}/api/v1/auth/signup`, data)
    .then(result => {
      dispatch(signUpSuccess(result.data));
    })
    .catch(({ response }) => {
      dispatch(signUpFailure(response));
    });
};
export default signupAction;
