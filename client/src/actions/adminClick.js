export function adminClick(challengeId, playerId) {
  return {
    type: 'TOGGLE_VISIBILITY',
    playerId,
    challengeId
  }
}
