import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//Import Reducers here

function challenge(state = [], action) {
  console.log(state, action);
  return state;
}

function increment(index = 0, action) {
  console.log(index, action);
  return index;
}

const rootReducer = combineReducers(
  {challenge, increment, routing: routerReducer}
);