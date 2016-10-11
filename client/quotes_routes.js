import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.scss'

import App from './components/App';
import QuoteGrid from './components/QuoteGrid';
import Quote from './components/Quote';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/quotes" component={App}>
        <IndexRoute component={QuoteGrid}></IndexRoute>
        <Route path="/quotes/show/:quoteId" component={Quote}></Route>
      </Route>
    </Router>
  </Provider>
)

render( router, document.getElementById('root'));
