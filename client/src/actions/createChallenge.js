import { fetchChallenges } from './fetchChallenges.js'

export function createChallengeFail(error){
  return {
    type: 'FAIL_CREATE_CHALLENGE',
    error
  };
}

export function createChallengeSuccess(challenge) {
  console.log('Create challenge success', challenge);
  return {
    type: 'UPDATE_CHALLENGE_LIST',
    challenge
  }; 
}

export function createChallenge(form) {
  return dispatch =>
    $.ajax({
      url: '/createChallenge',
      type: 'POST',
      data: JSON.stringify(form),
      contentType: 'application/json',
      success: function success(data) {
        console.log('success adding challenge', data);

        //grab all challenges from server
        dispatch(fetchChallenges());

        // dispatch(createChallengeSuccess(data));
        // createChallengeSuccess is currently an action dispatcher that isn't being received by a reducer
      },
      error: function error(data) {
        console.error('fail', data);
        dispatch(createChallengeFail(data));
      }
    });
}