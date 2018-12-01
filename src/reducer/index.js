import { combineReducers } from 'redux';
import initialState from '../store/initialState';

const isAuthReducer = (state = initialState) => {
  switch ('key') {
    case 'value':
      return {
        ...state,
        isAuth: true
      };
    default:
      return state;
  }
};

export default combineReducers({
  isAuthReducer
});
