import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Pengeluaran = React.lazy(() => import('./pengeluaran'));
const Pemasukan = React.lazy(() => import('./pemasukan'));
const Stok = React.lazy(() => import('./stok'));
const Riwayat = React.lazy(() => import('./riwayat'));
const Market = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/pengeluaran`} />
      <Route
        path={`${match.url}/pengeluaran`}
        render={(props) => <Pengeluaran {...props} />}
      />
      <Route
        path={`${match.url}/pemasukan`}
        render={(props) => <Pemasukan {...props} />}
      />
      <Route
        path={`${match.url}/stok`}
        render={(props) => <Stok {...props} />}
      />
      <Route
        path={`${match.url}/riwayat`}
        render={(props) => <Riwayat {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Market;
