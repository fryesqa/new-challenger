export function receiveUsers(users) {
  return {
    type: 'RECEIVE_USERS',
    entities: users.reduce((obj, user) => {
      obj[user.id] = user;
      return obj;
    }, {})
  }
}

export function fetchUsers(challengeId, userType) {
  return function(dispatch) {
    return fetch('http:localhost:3000/users')
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)));
  }
}
