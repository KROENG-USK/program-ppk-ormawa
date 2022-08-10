import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Jual = React.lazy(() => import('./jual'));
const Beli = React.lazy(() => import('./beli'));
const Stok = React.lazy(() => import('./stok'));
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
      <Route
        path={`${match.url}/stok`}
        render={(props) => <Stok {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Market;
