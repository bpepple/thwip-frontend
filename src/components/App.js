import React from 'react';
import MainBar from './MainBar';
import Routes from './Routes';
import history from './History';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimesCircle,
  faInfoCircle,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

library.add(faTimesCircle, faInfoCircle, faSearch);

const App = () => (
  <Container fluid={true}>
    {!history.location.pathname.includes('/reader/') && <MainBar />}
    <Routes />
  </Container>
);

export default App;
