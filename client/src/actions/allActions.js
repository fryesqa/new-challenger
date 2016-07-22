//All Actions
//Import actions here
import createChallenge from './createChallenge';


//test function
export function increment(index) {
  console.log('INCREMENT!');
  return {
    type:'INCREMENT',
    index
  };
}

export { createChallenge };