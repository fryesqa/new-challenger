import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//Import Reducers here

function challenge(state = [], action) {
  //console.log(state, action);
  return state;
}

function challengeList(state = [], action) {
  switch (action.type) {
    case 'CREATE_CHALLENGE':
      console.log('Inside create challenge reducer');
      //update challenges
      return state;
    default:
      return state;
  }
}


function index(i = 0, action) {
  console.log('Inside index reducer, Action:', action.type);
  switch (action.type) {
    case 'INCREMENT':
      //const i = action.index;
      return i + 1;
    default:
      return i;
  }
}
const rootReducer = combineReducers(
  {challenge, challengeList, index, routing: routerReducer}
);

export default rootReducer;