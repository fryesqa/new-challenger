//import fetch from 'isomorphic-fetch'
export function requestChallenges() {
  return {
    type: 'REQUEST_CHALLENGE_LIST',
  }
}

export function receiveChallenges(challenges) {
  return {
    type: 'RECEIVE_CHALLENGE_LIST',
    challenges,
    entities: {challenges: challenges.reduce((obj, challenge) => {
      obj[challenge.id] = challenge;
      return obj;
    }, {})},
    receivedAt: Date.now()
  }
}

export function fetchChallenges() {
  return function(dispatch) {
    return fetch('http://localhost:3000/challenges')
      .then(res => {
        return res.json();
       })
      .then(json => dispatch(receiveChallenges(json)));
  }
}

function shouldFetchChallenges(state) {
  const challengeList = state.entities.challengeList;
  if (!challengeList) {
    return true;
  } else if (challengeList.isFetching) {
    return false;
  } else {
    return challengeList.didInvalidate;
  }
}

export function fetchChallengesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchChallenges(getState())) {
      return dispatch(fetchChallenges());
    } else {
      return Promise.resolve();
    }
  }
}
