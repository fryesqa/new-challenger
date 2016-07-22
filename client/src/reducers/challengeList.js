export function challengeList(state = {
  isFetching: false,
  didInvalidate: true,
  items: []
}, action) {
  switch(action.type) {
    case 'INVALIDATE_CHALLENGE_LIST':
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case 'REQUEST_CHALLENGE_LIST':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case 'RECEIVE_CHALLENGE_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.challenges,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
