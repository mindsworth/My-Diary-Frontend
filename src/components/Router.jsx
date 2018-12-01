// react libraries
import React, { Fragment } from 'react';

// third party library
import { Switch, Route, Router, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Home from '../view/home/Home';
import Login from '../view/login/Login';
import NotFound from './NotFound';

const history = createBrowserHistory();

/**
 * @export
 * @class AppRouter
 * @extends {Component}
 */
const AppRouter = () => (
  <Router history={history}>
    <Fragment>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
);
export default AppRouter;
