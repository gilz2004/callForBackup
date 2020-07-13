import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import { Provider } from 'react-redux';

import { Store, applyMiddleware } from 'webext-redux';
import logger from 'redux-logger';

const proxyStore = new Store();
const middleware = [];
if (process.env.NODE_ENV === 'development') middleware.push(logger);

const storeWithMiddleware = applyMiddleware(proxyStore, ...middleware);
proxyStore
  .ready()
  .then(() => {
    render(
      <Provider store={storeWithMiddleware}>
        <Popup />
      </Provider>,

      window.document.querySelector('#app-container')
    );
  })
  .catch((err) => console.log('Somthing went wrong', err));
