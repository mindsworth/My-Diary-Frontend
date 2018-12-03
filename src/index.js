// React libraries
import React from 'react';
import ReactDOM from 'react-dom';

// third party libraries
import { Provider } from 'react-redux';

// state
import configureStore from './store/configureStore';

// components
import AppRouter from './components/Router';

// import styleheet
import './styles/index.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
