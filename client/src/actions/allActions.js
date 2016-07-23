//All Actions
//Import actions here
import createChallenge from './createChallenge';
import { fetchChallenges } from './fetchChallenges';
import { fetchUsers } from './fetchUsers';

//test function
export function increment(index) {
  console.log('INCREMENT!');
  return {
    type:'INCREMENT',
    index
  };
}

export { createChallenge, fetchChallenges, fetchUsers };
