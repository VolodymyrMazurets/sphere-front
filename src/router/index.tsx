import { Route, Switch } from 'react-router-dom';

import { HomeView } from '../views';
import React from 'react';
import { RouteTypes } from './types';

export const RouterView = () => {
  return (
    <Switch>
      <Route path={RouteTypes.home} component={HomeView} />
    </Switch>
  );
};
