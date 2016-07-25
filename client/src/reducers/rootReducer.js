import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import merge from 'lodash/merge';

//Import Reducers here
import { challengeList } from './challengeList.js';

// add new or update challenges and users
function entities(state = { users: {}, challenges: {} }, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }
  return state;
}

function currentChallenge(state = 1, action) {
  //console.log(state, action);
  return state;
}
function currentUser(state = null, action) {
  if(action.uid) {
    return action.uid;
  }

/*
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
*/

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
  {entities, currentChallenge, currentUser, challengeList, index, routing: routerReducer}
);

export default rootReducer;
