import React from 'react';
import { render } from 'react-dom';
import Popup from './Popup';
import { Provider } from 'react-redux';
import { Store, applyMiddleware } from 'webext-redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const proxyStore = new Store();
const middleware = [ReduxThunk];
if (process.env.NODE_ENV === 'development') middleware.push(logger);

const storeWithMiddleware = applyMiddleware(proxyStore, ...middleware);
// console.log('Store', storeWithMiddleware);
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
