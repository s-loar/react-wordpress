import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// Root reducer
import rootReducer from './reducers/index';
import {fetchQuotes} from './reducers/quotes';

// default data holding object
const defaultState = {
  quotes: []
}

// this following will let the store be available
// in the Redux tab of chrome dev tools
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore( rootReducer, defaultState, enhancers );

export const history = syncHistoryWithStore( browserHistory, store );

export default store;
