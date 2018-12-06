// react libraries
import React from 'react';

// third party library
import { Route, Redirect } from 'react-router-dom';

// helpers
import auth from '../helpers/TokenChecker';

/**
 * @desc renders header with links
 * @returns authenticated routes
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.verifyUserToken(localStorage.getItem('myDiaryToken')) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
