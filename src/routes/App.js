import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

import NotFound from '../components/NotFound';

import Search from '../components/Search';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
