import React from "react";
import { Switch, Route } from "react-router-dom";
import Publisher from "./Publisher";
import Series from "./Series";

const Main = () => (
  <main>
    <Switch>
      <Route path="/series" component={Series} />
      <Route path="/publisher" component={Publisher} />
    </Switch>
  </main>
);

export default Main;
