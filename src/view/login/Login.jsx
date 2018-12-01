// third party libraries
import { connect } from 'react-redux';

// components
import Login from '../../components/login/Login';
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState) => ({
  auth: state.isAuthReducer.auth
});
export default connect(mapStateToProps)(Login);
