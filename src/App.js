import React from "react";
import { Switch, Route } from "react-router-dom";
import PublisherList from "./PublisherList";
import PublisherDetail from "./PublisherDetail";
import SeriesList from "./SeriesList";
import SeriesDetail from "./SeriesDetail";
import Reader from "./Reader";
import Header from "./Header";
import { Container } from "reactstrap";

const App = () => (
  <Container>
    <Header />
    <main>
      <Switch>
        <Route exact path="/series" component={SeriesList} />
        <Route path="/series/:slug" component={SeriesDetail} />
        <Route exact path="/publisher" component={PublisherList} />
        <Route path="/publisher/:slug" component={PublisherDetail} />
        <Route
          path="/reader/:slug/"
          render={props => <Reader pages="15" {...props} />}
        />
      </Switch>
    </main>
  </Container>
);

export default App;
