//App Actions: methods available for the first children of AppRedux

//Import actions here
import { fetchChallenges } from './fetchChallenges';
import { fetchUsers } from './fetchUsers';
import { adminClick } from './adminClick';

//test function
export function increment(index) {
  console.log('INCREMENT!');
  return {
    type: 'INCREMENT',
    index
  };
}

export { fetchChallenges, fetchUsers };
