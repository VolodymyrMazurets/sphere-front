import { HomeView, ResultView } from "../views";
import { Route, Switch } from "react-router-dom";

import React from "react";
import { RouteTypes } from "./types";

export const RouterView = () => {
  return (
    <Switch>
      <Route path={RouteTypes.home} exact>
        <HomeView />
      </Route>
      <Route path={RouteTypes.result}>
        <ResultView />
      </Route>
    </Switch>
  );
};
