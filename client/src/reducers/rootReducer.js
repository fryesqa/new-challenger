import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//Import Reducers here

function challenge(state = [], action) {
  console.log(state, action);
  return state;
}

function index(i = 0, action) {
  console.log(i, action);
  return i;
}
const rootReducer = combineReducers(
  {challenge, index, routing: routerReducer}
);

export default rootReducer;