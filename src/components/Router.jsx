// react libraries
import React, { Fragment } from 'react';

// third party library
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Home from '../view/home/Home';
import Login from '../view/login/Login';
import NotFound from './NotFound';
import Signup from '../view/signup/Signup';
import Dashboard from './dashboard/Dashboard';

const history = createBrowserHistory();

/**
 * @export
 * @class AppRouter
 * @extends {Component}
 */
const AppRouter = () => (
  <Router history={history}>
    <Fragment>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
);
export default AppRouter;
