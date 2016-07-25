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
  // challengeList: dummyData.challenges,
  currentChallenge: dummyData.challenges[0],
  currentUser: '12345', // not sure if this has to be a string or integer?
  // currentChallenge: 1,
  index: 0
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
