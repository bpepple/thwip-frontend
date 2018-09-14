import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import MainBar from './MainBar';
import Routes from './Routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimesCircle,
  faInfoCircle,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

library.add(faTimesCircle, faInfoCircle, faSearch);

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <React.Fragment>
      {!history.location.pathname.includes('/reader/') && <MainBar />}
      <Routes />
    </React.Fragment>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object
};

export default App;
