// third party libraries
import { connect } from 'react-redux';

// components
import Home from '../../components/home/Home';
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState) => ({
  auth: state.isAuthReducer.auth
});
export default connect(mapStateToProps)(Home);
