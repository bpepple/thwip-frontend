import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import MainBar from './MainBar';
import Routes from './Routes';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimesCircle,
  faInfoCircle,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

library.add(faTimesCircle, faInfoCircle, faSearch);

const App = ({ history }) => (
  <Container fluid={true}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        {!history.location.pathname.includes('/reader/') && <MainBar />}
        <Routes />
      </React.Fragment>
    </ConnectedRouter>
  </Container>
);

App.propTypes = {
  history: PropTypes.object
};

export default App;
