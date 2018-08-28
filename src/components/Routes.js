import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PublisherList from './PublisherList';
import PublisherDetail from './PublisherDetail';
import SeriesList from './SeriesList';
import SeriesDetail from './SeriesDetail';
import RecentIssues from './RecentIssues';
import Reader from './reader/Reader';
import { PrivateRoute } from './PrivateRoute';
import Login from './auth/login';
import Logout from './auth/logout';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/series/page/:page" component={SeriesList} />
    <PrivateRoute path="/series/:slug/page/:page" component={SeriesDetail} />
    <PrivateRoute
      exact
      path="/publisher/page/:page"
      component={PublisherList}
    />
    <PrivateRoute
      path="/publisher/:slug/page/:page"
      component={PublisherDetail}
    />
    <PrivateRoute path="/issues/recent/page/:page" component={RecentIssues} />
    <PrivateRoute path="/reader/:slug" component={Reader} />} />
    <Route path="/login" exact component={Login} />
    <Route path="/logout" component={Logout} />
    <Redirect from="/" to="/series/page/1" />
  </Switch>
);
export default Routes;
