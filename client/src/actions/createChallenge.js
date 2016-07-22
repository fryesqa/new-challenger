export function createChallengeFail(error){
  return {
    type: 'FAIL_CREATE_CHALLENGE',
    error
  };
}

export function createChallengeSuccess(challenge) {
  return {
    type: 'UPDATE_CHALLENGE_LIST',
    challenge
  }; 
}

export default function createChallenge(form) {
  return dispatch =>
    $.ajax({
      url: '/createChallenge',
      type: 'POST',
      data: JSON.stringify(form),
      contentType: 'application/json',
      success: function success(data) {
        console.log('success adding challenge', data);

        //update challenge list
        dispatch(createChallengeSuccess(data));
      },
      error: function error(data) {
        console.error('fail', data);
        dispatch(createChallengeFail(data));
      }
    });
}