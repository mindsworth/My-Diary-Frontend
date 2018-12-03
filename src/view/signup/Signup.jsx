// third party libraries
import { connect } from 'react-redux';

// components
import initialState from '../../store/initialState';
import Signup from '../../components/signup/Signup';

// actions
import signupAction from '../../action/signupAction';

export const mapStateToProps = (state = initialState) => ({
  signupState: state.signupReducer,
  isLoading: state.signupReducer.isLoading,
  errorResponse: state.signupReducer.errorResponse,
  isRegistered: state.signupReducer.isRegistered
});

const mapDispatchToProps = dispatch => ({
  signupAction: user => dispatch(signupAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
