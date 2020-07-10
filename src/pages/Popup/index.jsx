import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import { Provider } from 'react-redux';
// import store from '../../Redux/Store/store';
import { Store } from 'webext-redux';

const store = new Store();
store.ready().then(() => {
  render(
    <Provider store={store}>
      <Popup />
    </Provider>,

    window.document.querySelector('#app-container')
  );
});
