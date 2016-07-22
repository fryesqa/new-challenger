import { createStore, applyMiddleware } from 'redux';
import { fetchChallenges } from './actions/fetchChallenges.js';
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
  // challengeList: dummyData.challenges,
  challenge: dummyData.challenges[0],
  index: 0
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

// check that fetch challenges is working
console.log('store state is', store.getState());
store.dispatch(fetchChallenges()).then(() => console.log('store state is now', store.getState()));

export default store;
