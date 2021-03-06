import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { AUTH_USER } from './actions/types';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import history from './History';
import { Container } from 'reactstrap';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))
  )
);
const token = localStorage.getItem('token');

// if we have a token, consiger the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store}>
    <Container fluid={true}>
      <App history={history} />
    </Container>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
