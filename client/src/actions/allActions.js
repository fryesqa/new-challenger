//All Actions
//Import actions here

export function saveChallenge(form) {
  return {
    type: 'SAVE_CHALLENGE_FORM',
    form
  };
}
//test function
export function increment(index) {
  return {
    type:'INCREMENT',
    index
  };
}

