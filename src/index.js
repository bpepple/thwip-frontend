import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { AUTH_USER } from './actions/types';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));
const token = localStorage.getItem('token');

// if we have a token, consiger the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
