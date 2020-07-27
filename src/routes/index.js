import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';

import SignIn from '../pages/Auth';
import Dashboard from '../pages/Churras';
import NewChurras from '../pages/Churras/Form';
import ListChurras from '../pages/ListChurras';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/churras" component={Dashboard} isPrivate  />
      <Route path="/new-churras" component={NewChurras}isPrivate />
      <Route path="/list-churras" component={ListChurras} isPrivate/>
    </Switch>
  );
}
