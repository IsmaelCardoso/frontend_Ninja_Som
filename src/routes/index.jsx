import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewPage from '../pages/NewPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/new-page" component={NewPage} />
  </Switch>
);

export default Routes;
