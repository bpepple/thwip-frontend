import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import PublisherList from './PublisherList';
import PublisherDetail from './PublisherDetail';
import SeriesList from './SeriesList';
import SeriesDetail from './SeriesDetail';
import RecentIssues from './RecentIssues';
import Reader from './reader/Reader';
import MainBar from './MainBar';
import { Container } from 'reactstrap';
import { PrivateRoute } from './PrivateRoute';

import Login from './auth/login';
import Logout from './auth/logout';

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
        <Switch>
          <PrivateRoute
            exact
            path="/series/page/:page"
            component={SeriesList}
          />
          <PrivateRoute
            path="/series/:slug/page/:page"
            component={SeriesDetail}
          />
          <PrivateRoute
            exact
            path="/publisher/page/:page"
            component={PublisherList}
          />
          <PrivateRoute
            path="/publisher/:slug/page/:page"
            component={PublisherDetail}
          />
          <PrivateRoute
            path="/issues/recent/page/:page"
            component={RecentIssues}
          />
          <PrivateRoute path="/reader/:slug" component={Reader} />} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" component={Logout} />
          <Redirect from="/" to="/series/page/1" />
        </Switch>
      </React.Fragment>
    </ConnectedRouter>
  </Container>
);

App.propTypes = {
  history: PropTypes.object
};
export default App;
