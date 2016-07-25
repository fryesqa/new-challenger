import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import dummyData from './components/dummyData';


// var initialData = [
//   {name: 'ALS Water Bucket', challengers: 1000},
//   {name: 'Pie Eating', challengers:20},
//   {name: 'Chili Pepper', challengers:0}
// ];

const defaultState = {
  currentUser: '1', // must be a string
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
