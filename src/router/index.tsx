import {
  FavoriteView,
  HelpView,
  HomeView,
  ListDetailsView,
  ListView,
  ProfileView,
  ResultView,
} from "../views";
import { Route, Switch, withRouter } from "react-router-dom";

import React from "react";
import { RouteTypes } from "./types";

export const RouterView = withRouter(({ location }) => {
  return (
    <Switch>
      <Route path={RouteTypes.home} exact component={HomeView} />
      <Route path={RouteTypes.result} component={ResultView} />
      <Route path={RouteTypes.list} component={ListView} exact />
      <Route path={RouteTypes.listDetails} component={ListDetailsView} />
      <Route path={RouteTypes.profile} component={ProfileView} />
      <Route path={RouteTypes.favorite} component={FavoriteView} />
      <Route path={RouteTypes.help} component={HelpView} />
    </Switch>
  );
});
