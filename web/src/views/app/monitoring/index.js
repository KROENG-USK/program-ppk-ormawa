import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Awp = React.lazy(() => import('./awp'));
const Listrik = React.lazy(() => import('./listrik'));
const Monitoring = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/awp`} />
      <Route path={`${match.url}/awp`} render={(props) => <Awp {...props} />} />
      <Route
        path={`${match.url}/listrik`}
        render={(props) => <Listrik {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Monitoring;
