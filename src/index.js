import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
