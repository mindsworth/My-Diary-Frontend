// action constants
import { SET_CURRENT_USER } from '../constants';

const setLoggedInUser = user => ({
  type: SET_CURRENT_USER,
  payload: { user }
});

export default setLoggedInUser;
