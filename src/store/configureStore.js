// 3rd party Libraries
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// reducers
import rootReducer from '../reducers';

const logger = createLogger({
  collapsed: true
});

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * @desc setup redux store
 * @returns {object} store
 */
const configureStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default configureStore;
