// react libraries
import React, { Component } from 'react';

// third party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// initialState
import initialState from '../store/initialState';

/**
 * @export
 * @class AppRouter
 * @extends {Component}
 */
export class AppRouter extends Component {
  render() {
    return (
      <div>
        <h1>React Setup: is Authenticated === {`${this.props.isAuth}`}</h1>
      </div>
    );
  }
}

AppRouter.propTypes = {
  isAuth: PropTypes.bool
};

const mapStateToProps = (state = initialState) => ({
  isAuth: state.isAuthReducer.auth.isAuth
});

export default connect(mapStateToProps)(AppRouter);
