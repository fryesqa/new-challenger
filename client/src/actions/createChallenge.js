export default function createChallenge(form) {
  return {
    type: 'CREATE_CHALLENGE',
    form
  };
}