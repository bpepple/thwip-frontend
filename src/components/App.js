import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PublisherList from './PublisherList';
import PublisherDetail from './PublisherDetail';
import SeriesList from './SeriesList';
import SeriesDetail from './SeriesDetail';
import RecentIssues from './RecentIssues';
import Reader from './reader/Reader';
import MainBar from './MainBar';
import { Container } from 'reactstrap';

import history from './History';

import Login from './auth/login';
import Logout from './auth/logout';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faTimesCircle, faInfoCircle);

const App = () => (
  <Container fluid={true}>
    {!history.location.pathname.includes('/reader/') && <MainBar />}
    <Switch>
      <Route exact path="/series/page/:page" component={SeriesList} />
      <Route path="/series/:slug/page/:page" component={SeriesDetail} />
      <Route exact path="/publisher/page/:page" component={PublisherList} />
      <Route path="/publisher/:slug/page/:page" component={PublisherDetail} />
      <Route path="/issues/recent/page/:page" component={RecentIssues} />
      <Route path="/reader/:slug" component={Reader} />} />
      <Route path="/login" exact component={Login} />
      <Route path="/Logout" component={Logout} />
      <Redirect from="/" to="/series/page/1" />
    </Switch>
  </Container>
);

export default App;
