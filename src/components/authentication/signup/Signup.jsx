// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import classNames from 'classnames';
import Loader from 'react-loader-spinner';

// helper
import Validator from '../../../helpers/validator';

// components
import Button from '../../reusables/buttons/ButtonCSS';
import '../../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import {
  LayoutAuth,
  FormWrap,
  Form,
  Img,
  FormControl,
  FormGroupWrap,
  FormGroup,
  FormTitle,
  Title,
  Label,
  Loading
} from '../AuthenticationCSS';

const { signupValidator } = Validator;

/**
 *
 *
 * @export
 * @class Signup
 * @extends {Component}
 * @param {event}  event
 */
export class Signup extends Component {
  state = {
    user: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      password_confirmation: ''
    },
    vError: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      password_confirmation: ''
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
    const validate = signupValidator(user);

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
      this.props.signupAction(user).then(() => {
        if (this.props.errorResponse) {
          const { status } = this.props.errorResponse.error;
          const message =
            status === 409 ? 'Email already exist, try signing in.' : 'Server error, please try again later.';
          const notify = () =>
            toast(message, {
              position: 'top-right',
              autoClose: 10000,
              pauseOnHover: true,
              hideProgressBar: true
            });
          notify();
        }
      });
    }
  };

  render() {
    const { email, firstName, lastName, password } = this.state.vError;
    if (this.props.isRegistered) {
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
          <Form onSubmit={this.handleOnSubmit}>
            <FormTitle>
              <Title>Sign Up</Title>
              <p>
                or
                <Link className="formSubLink" to="./login">
                  sign in to your account.
                </Link>
              </p>
            </FormTitle>
            <FormGroup>
              <FormControl
                value={this.state.user.email}
                onChange={this.handleOnChange}
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className={classNames('', {
                  error: !!email
                })}
              />
              <Label>{this.state.vError.email}</Label>
            </FormGroup>
            <FormGroupWrap bsSize="small">
              <FormGroup>
                <FormControl
                  value={this.state.user.firstName}
                  onChange={this.handleOnChange}
                  name="firstName"
                  type="text"
                  autoComplete="off"
                  placeholder="firstname"
                  className={classNames('', {
                    error: !!firstName
                  })}
                />
                <Label>{this.state.vError.firstName}</Label>
              </FormGroup>
              <FormGroup>
                <FormControl
                  value={this.state.user.lastName}
                  onChange={this.handleOnChange}
                  name="lastName"
                  type="text"
                  autoComplete="off"
                  placeholder="Lastname"
                  className={classNames('', {
                    error: !!lastName
                  })}
                />
                <Label>{this.state.vError.lastName}</Label>
              </FormGroup>
            </FormGroupWrap>
            <FormGroupWrap bsSize="small">
              <FormGroup>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleOnChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={classNames('', {
                    error: !!password
                  })}
                />
                <Label>{this.state.vError.password}</Label>
              </FormGroup>
              <FormGroup>
                <FormControl
                  value={this.state.password_confirmation}
                  onChange={this.handleOnChange}
                  name="password_confirmation"
                  type="password"
                  autoComplete="false"
                  placeholder="Confirm password"
                  className={classNames('', {
                    error: !!password
                  })}
                />
                <Label>{this.state.vError.password_confirmation}</Label>
              </FormGroup>
            </FormGroupWrap>
            <Button primary>Create account</Button>
          </Form>
        </FormWrap>
      </LayoutAuth>
    );
  }
}

Signup.propTypes = {
  signupAction: PropTypes.func,
  errorResponse: PropTypes.object,
  isLoading: PropTypes.bool,
  isRegistered: PropTypes.bool
};

export default Signup;
