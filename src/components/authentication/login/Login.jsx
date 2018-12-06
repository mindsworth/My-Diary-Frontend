// react libraries
import React, { Component } from 'react';

// third party libraries
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import classNames from 'classnames';
import Loader from 'react-loader-spinner';

// components
import Button from '../../reusables/buttons/ButtonCSS';
import {
  LayoutAuth,
  FormWrap,
  Loading,
  Form,
  Img,
  FormControl,
  FormGroup,
  FormTitle,
  Title,
  Label
} from '../AuthenticationCSS';

// helper
import Validator from '../../../helpers/validator';

const { loginValidator } = Validator;

/**
 * @export
 * @class Login
 * @extends {Component}
 * @param{event} event
 */
export class Login extends Component {
  state = {
    user: {
      email: '',
      password: ''
    },
    vError: {
      email: '',
      password: ''
    }
  };

  handleOnChange = event => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { user } = this.state;
    const validate = loginValidator(user);

    const { vError } = this.state;

    if (!validate.isValid()) {
      for (const error in vError) {
        vError[error] = '';
        if (validate.getErrors()[error]) {
          vError[error] = validate.getErrors()[error][0] ? validate.getErrors()[error][0] : '';
          this.setState({ vError });
        }
      }
    } else {
      for (const error in vError) {
        vError[error] = '';
        this.setState({ vError });
      }
      this.props.loginAction(user).then(() => {
        const notify = message =>
          toast(message, {
            position: 'top-right',
            autoClose: 10000,
            pauseOnHover: true,
            hideProgressBar: true
          });
        if (this.props.errorResponse) {
          const { status } = this.props.errorResponse.error;
          const message =
            status === 400 ? 'Your Email or Passowrd is incorrect!.' : 'Server error, please try again later.';
          notify(message);
        }
      });
    }
  };

  render() {
    const { email, password } = this.state.vError;
    console.log('Hi===>', this.props.isAuth);
    if (this.props.isAuth) {
      return <Redirect to="./dashboard" />;
    }
    return (
      <LayoutAuth authBg>
        <ToastContainer className="toast" />
        {this.props.isLoading ? (
          <Loading>
            <Loader type="Circles" color="#ffffff" height="70" width="70" margin="2px" />
          </Loading>
        ) : (
          ''
        )}
        <FormWrap>
          <Link to="/">
            <Img src="./images/mydiary_logo_white.png" alt="mydiary logo" />
          </Link>
          <Form>
            <FormTitle>
              <Title>Sign In</Title>
              <p>
                or
                <Link className="formSubLink" to="./signup">
                  sign up for a new account.
                </Link>
                .
              </p>
            </FormTitle>
            <FormGroup>
              <FormControl
                name="email"
                type="text"
                onChange={this.handleOnChange}
                placeholder="Email"
                value={this.state.user.email}
                autoComplete="off"
                className={classNames('', {
                  error: !!email
                })}
              />
              <Label>{this.state.vError.email}</Label>
            </FormGroup>
            <FormGroup>
              <FormControl
                name="password"
                type="password"
                onChange={this.handleOnChange}
                placeholder="Password"
                value={this.state.user.password}
                className={classNames('', {
                  error: !!password
                })}
              />
              <Label>{this.state.vError.password}</Label>
            </FormGroup>
            <Button primary onClick={this.handleOnSubmit}>
              Log me in
            </Button>
          </Form>
        </FormWrap>
      </LayoutAuth>
    );
  }
}

Login.propTypes = {
  loginAction: PropTypes.func,
  errorResponse: PropTypes.object,
  isLoading: PropTypes.bool,
  isAuth: PropTypes.bool
};

export default Login;
