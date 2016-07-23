export function challengeList(state = {items: []}, action) {
  switch(action.type) {
    case 'RECEIVE_CHALLENGE_LIST':
      return Object.assign({}, state, {
        items: action.challenges,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
