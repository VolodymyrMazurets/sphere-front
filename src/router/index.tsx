import { HomeView, ListView, ResultView } from "../views";
import { Route, Switch } from "react-router-dom";

import React from "react";
import { RouteTypes } from "./types";

export const RouterView = () => {
  return (
    <Switch>
      <Route path={RouteTypes.home} exact component={HomeView} />
      <Route path={RouteTypes.result} component={ResultView} />
      <Route path={RouteTypes.list} component={ListView} />
    </Switch>
  );
};
