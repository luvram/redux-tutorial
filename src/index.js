import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducer from './reducer';


const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('app'));
