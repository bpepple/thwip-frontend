import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test('renders without crashing', () => {
  shallow(
    <Router>
      <App />
    </Router>
  );
});
