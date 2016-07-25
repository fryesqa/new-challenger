export function addPlayer(challengeId, playerId) {
  return {
    type: 'ADD_PLAYER',
    challengeId,
    playerId
  };
}

export function addPlayers(challengeId = 3, playerIds = [1, 2]) {
  return {
    type: 'ADD_PLAYERS',
    challengeId,
    playerIds
  }
}
