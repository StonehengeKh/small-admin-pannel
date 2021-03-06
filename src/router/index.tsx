import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import { store, history } from '../redux/store';

import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import NotePage from '../pages/NotePage';
import ErrorPage from '../pages/ErrorPage';
import TrackerPage from '../pages/TrackerPage';
import ListPage from '../pages/ListPage';

function Router() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/tracker/" component={TrackerPage} />
          <Route path="/list/" component={ListPage} />
          <Route path="/user/:id" component={UserPage} />
          <Route path="/note/:id" component={NotePage} />
          <Route component={ErrorPage} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default Router;
