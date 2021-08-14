import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './App';

const Store = store;
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  root
);
