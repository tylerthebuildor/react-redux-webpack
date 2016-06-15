import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import configureStore from './js/stores';
import AppContainer from './js/containers/AppContainer';
import DetailsContainer from './js/containers/DetailsContainer';

const initialState = {};
const store = configureStore(initialState, routerMiddleware(browserHistory));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
      </Route>
      <Route path="/details/:repoName" component={DetailsContainer}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
