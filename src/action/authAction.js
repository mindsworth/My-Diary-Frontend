// action constants
import { SET_CURRENT_USER } from '../constants';

const setLoggedInUser = data => {
  localStorage.setItem('myDiaryToken', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
  return {
    type: SET_CURRENT_USER,
    payload: data.user
  };
};

export default setLoggedInUser;
