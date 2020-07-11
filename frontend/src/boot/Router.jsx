import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Users } from '../components/Users';
import { Articles } from '../components/Articles';
import { Categories } from '../components/Categories';
import LoginPage from '../pages/Login';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/users" component={Users} />
      <Route path="/articles" component={Articles} />
      <Route path="/categories" component={Categories} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  )
};
