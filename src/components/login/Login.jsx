// react libraries
import React, { Component } from 'react';

/**
 * @export
 * @class Login
 * @extends {Component}
 */
export class Login extends Component {
  state = {
    isAuth: true
  };

  render() {
    const { isAuth } = this.state;
    return (
      <div>
        <h1>This is the LOGIN page {`${isAuth}`}</h1>
      </div>
    );
  }
}

export default Login;
