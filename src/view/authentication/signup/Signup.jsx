// third party libraries
import { connect } from 'react-redux';

// components
import initialState from '../../../store/initialState';
import Signup from '../../../components/authentication/signup/Signup';

// actions
import signupAction from '../../../action/signupAction';

export const mapStateToProps = (state = initialState) => ({
  isLoading: state.signup.isLoading,
  errorResponse: state.signup.errorResponse,
  isRegistered: state.signup.isRegistered
});

const mapDispatchToProps = dispatch => ({
  signupAction: user => dispatch(signupAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
