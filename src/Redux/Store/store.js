import { createStore, applyMiddleware } from 'redux';
import { wrapStore, alias } from 'webext-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import aliases from './aliases';

import { NODE_ENV } from '../../../utils/env';
import rootReducer from '../Reducers/rootReducer';

// const middleware = [];
// if (NODE_ENV === 'development') middleware.push(logger);

const store = createStore(
  rootReducer,
  applyMiddleware(alias(aliases), thunk, logger)
);

wrapStore(store, {
  portName: 'CALLFORHELP',
});

export default store;
