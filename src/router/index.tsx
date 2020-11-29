import {
  FavoriteView,
  HelpView,
  HomeView,
  ListView,
  ProfileView,
  ResultView,
} from "../views";
import { Route, Switch } from "react-router-dom";

import React from "react";
import { RouteTypes } from "./types";

export const RouterView = () => {
  return (
    <Switch>
      <Route path={RouteTypes.home} exact component={HomeView} />
      <Route path={RouteTypes.result} component={ResultView} />
      <Route path={RouteTypes.list} component={ListView} />
      <Route path={RouteTypes.profile} component={ProfileView} />
      <Route path={RouteTypes.favorite} component={FavoriteView} />
      <Route path={RouteTypes.help} component={HelpView} />
    </Switch>
  );
};
