import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { NODE_ENV } from '../../../utils/env';
import rootReducer from '../Reducers/rootReducer';

const middleWare = [];
if (NODE_ENV === 'development') middleWare.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middleWare));
