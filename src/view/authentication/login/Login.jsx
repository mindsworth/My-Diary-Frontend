// third party libraries
import { connect } from 'react-redux';

// components
import Login from '../../../components/authentication/login/Login';
import initialState from '../../../store/initialState';
import loginAction from '../../../action/loginAction';

const mapStateToProps = (state = initialState) => ({
  isLoading: state.loginReducer.isLoading,
  errorResponse: state.loginReducer.errorResponse,
  isAuth: state.loginReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  loginAction: user => dispatch(loginAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
