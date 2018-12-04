// third party libraries
import { connect } from 'react-redux';

// components
import Login from '../../../components/authentication/login/Login';
import initialState from '../../../store/initialState';
import loginAction from '../../../action/loginAction';

const mapStateToProps = (state = initialState) => ({
  isLoading: state.login.isLoading,
  errorResponse: state.login.errorResponse,
  isAuth: state.login.isAuth
});

const mapDispatchToProps = dispatch => ({
  loginAction: user => dispatch(loginAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
