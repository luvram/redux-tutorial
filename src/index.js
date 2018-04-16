import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { calculate } from './reducer';

const store = createStore(
  calculate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // debug 용
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
