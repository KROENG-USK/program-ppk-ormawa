import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Jual = React.lazy(() => import('./jual'));
const Beli = React.lazy(() => import('./beli'));
const Market = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/jual`} />
      <Route
        path={`${match.url}/jual`}
        render={(props) => <Jual {...props} />}
      />
      <Route
        path={`${match.url}/beli`}
        render={(props) => <Beli {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Market;
