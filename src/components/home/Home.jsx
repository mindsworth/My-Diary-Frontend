// react libraries
import React, { Component } from 'react';

/**
 * @export
 * @class Home
 * @extends {Component}
 */
export class Home extends Component {
  state = {
    isAuth: true
  };

  render() {
    const { isAuth } = this.state;
    return (
      <div>
        <h1>This is the landing page {`${isAuth}`}</h1>
      </div>
    );
  }
}

export default Home;
