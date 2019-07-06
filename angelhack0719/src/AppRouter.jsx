import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import Loading from './Loading';

const lazyLoadComponent = path =>
  loadable(() => import(`./${path}`), {
    fallback: <Loading />
  });

const AppRouter = () => (
  <Switch>
    <Route
      exact
      path="/channels"
      component={lazyLoadComponent('Channels')}
    />
    <Route
      exact
      path="/users/:user_id/channels"
      component={lazyLoadComponent('UserChannels')}
    />
    <Route path="/" component={lazyLoadComponent('HomePage')} />
  </Switch>
);

export default AppRouter;
