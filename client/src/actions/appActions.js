//App Actions: methods available for the first children of AppRedux

//Import actions here
import { fetchChallenges } from './fetchChallenges';
import { fetchUsers } from './fetchUsers';
import { loginUser } from './loginUser';
import { signUpChallenge } from './signUpChallenge';
//test function
export function increment(index) {
  console.log('INCREMENT!');
  return {
    type: 'INCREMENT',
    index
  };
}


export { fetchChallenges, fetchUsers, loginUser, signUpChallenge };
