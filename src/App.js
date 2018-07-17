import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PublisherList from './PublisherList';
import PublisherDetail from './PublisherDetail';
import SeriesList from './SeriesList';
import SeriesDetail from './SeriesDetail';
import Reader from './Reader/Reader';
import { Container } from 'reactstrap';

const App = () => (
  <Container fluid={true}>
    <Switch>
      <Route exact path="/series" component={SeriesList} />
      <Route path="/series/:slug" component={SeriesDetail} />
      <Route exact path="/publisher" component={PublisherList} />
      <Route path="/publisher/:slug" component={PublisherDetail} />
      <Route
        path="/reader/:slug/:pages"
        render={props => <Reader {...props} />}
      />
      <Redirect from="/" to="/series" />
    </Switch>
  </Container>
);

export default App;
