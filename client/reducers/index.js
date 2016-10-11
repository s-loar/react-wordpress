import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import quotes from './quotes';

const rootReducer = combineReducers({quotes, routing: routerReducer});

export default rootReducer;
