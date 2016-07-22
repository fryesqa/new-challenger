import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//Import Reducers here

function challenge(state = [], action) {
  //console.log(state, action);
  return state;
}

function challengeList(state = [], action) {
  switch (action.type) {
    case 'UPDATE_CHALLENGE_LIST':
      console.log('Inside update challenge list', action.challenge);
      return state.concat(action.challenge);
    case 'FAIL_CREATE_CHALLENGE':
      //return Object.assign({}, state, {})
    default :
      return state;
  }
}


function index(i = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('Inside index reducer incrementing');
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