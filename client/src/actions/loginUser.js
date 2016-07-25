export function loginUser(user) {
  console.log("LOGIN THE USER");
  return {
    type: 'LOGIN_USER',
    user
  };
}