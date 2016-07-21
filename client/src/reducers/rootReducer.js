import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//Import Reducers here

function challenge(state = [], action) {
  console.log(state, action);
  return state;
}

function index(i = 0, action) {
  console.log('Inside index reducer, Action:', action.type);
  switch (action.type) {
    case 'INCREMENT':
      //const i = action.index;
      console.log('Incrementing index', i);
      return i + 1;
    default:
      return i;
  }
  return i;
}
const rootReducer = combineReducers(
  {challenge, index, routing: routerReducer}
);

export default rootReducer;