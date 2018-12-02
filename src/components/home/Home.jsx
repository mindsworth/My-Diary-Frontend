// react libraries
import React, { Component } from 'react';

/**
 * @export
 * @class Home
 * @extends {Component}
 */
export class Home extends Component {
  state = {
    user: true
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        <h1>This is the landing page {`${user}`}</h1>
      </div>
    );
  }
}

export default Home;
