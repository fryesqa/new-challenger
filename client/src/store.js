import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/rootReducer';

//import dummyData from './components/dummyData';

var initialData = {
  {name: 'ALS Water Bucket', challengers: 1000},
  {name: 'Pie Eating', challengers:20},
  {name: 'Chili Pepper', challengers:0}
}

const defaultState = {
  challenges: initialData
}

export default const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

