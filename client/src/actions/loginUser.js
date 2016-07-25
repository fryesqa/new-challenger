export function loginUser(uid) {
  return {
    type: 'LOGIN_USER',
    entities: {uid: uid}
  }
}