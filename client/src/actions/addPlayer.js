export function addPlayer(challengeId, playerId) {
  return {
    type: 'ADD_PLAYER',
    challengeId,
    playerId
  };
}
