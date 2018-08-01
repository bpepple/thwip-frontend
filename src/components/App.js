import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import PublisherList from './PublisherList';
import PublisherDetail from './PublisherDetail';
import SeriesList from './SeriesList';
import SeriesDetail from './SeriesDetail';
import Reader from './reader/Reader';
import MainBar from './MainBar';
import { Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faTimesCircle, faInfoCircle);

const App = withRouter(({ location }) => (
  <Container fluid={true}>
    {!location.pathname.includes('/reader/') && <MainBar />}
    <Switch>
      <Route exact path="/series" component={SeriesList} />
      <Route path="/series/:slug" component={SeriesDetail} />
      <Route exact path="/publisher" component={PublisherList} />
      <Route path="/publisher/:slug" component={PublisherDetail} />
      <Route path="/reader/:slug" component={Reader} />} />
      <Redirect from="/" to="/series" />
    </Switch>
  </Container>
));

export default App;