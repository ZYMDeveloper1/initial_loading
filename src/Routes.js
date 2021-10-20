import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

function Routes() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          exact
          path="/home"
          component={lazy(() => import('./containers/Home'))}
        />
        <Route
          exact
          path="/about"
          component={lazy(() => import('./containers/About'))}
        />
        <Route
          exact
          path="/dashboard"
          component={lazy(() => import('./containers/Dashboard'))}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
