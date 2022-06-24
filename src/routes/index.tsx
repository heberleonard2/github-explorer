import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import QrCode from '../pages/QrCode';

const Routes: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
      <Route path="/qrcode" component={QrCode} />
    </Switch>
  </HashRouter>
);

export default Routes;
