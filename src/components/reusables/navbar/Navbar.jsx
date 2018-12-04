// react libraries
import React, { Component } from 'react';

// third party component
import { Link } from 'react-router-dom';

// components
import { Header, Brand, Logo, Nav, User, Ul, UserUl, Li, Fa, Thumbnail, ThumbnailWrap } from './NavbarCSS';

/**
 *
 *
 * @export
 * @class Navbar
 * @extends {Component}
 */
export default class Navbar extends Component {
  render() {
    console.log(this.props);
    return (
      <Header>
        <Brand>
          <Link to="/">
            <Logo src="../../images/mydiary_logo_white.png" alt="diari_logo" />
          </Link>
        </Brand>
        <Nav>
          <Ul>
            <Li>
              <Link className="navLink" to="./dashboard.html">
                Dashboard
              </Link>
            </Li>
            <Li>
              <Link className="navLink" to="/">
                <Fa className="link fas fa-plus" />
              </Link>
            </Li>
          </Ul>
        </Nav>
        <User>
          <UserUl>
            <Li className="username">Chigoziem</Li>
            <Li>
              <ThumbnailWrap>
                <Thumbnail src="./images/userface.png" alt="User thumbnail" />
              </ThumbnailWrap>
            </Li>
          </UserUl>
        </User>
      </Header>
    );
  }
}
