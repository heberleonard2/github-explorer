import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  // Switch -> Exibir apenas uma rota
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  </HashRouter>
);

export default Routes;
