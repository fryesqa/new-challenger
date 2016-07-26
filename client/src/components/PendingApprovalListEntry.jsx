import React from 'react';

const PendingApprovalListEntry = ({player, handleClick, entities }) => {
  // grab user info from entities using player id
  const data = entities.users[player.id];
  return (
    <div>
      {/* click will toggle attemptVisible prop of player */}
      <div onClick={handleClick}>{data.name}</div>
      {/* check if we should render player's submission */}
      {player.attemptVisible ? data.attempt ? <img src={data.attempt.imageUrl} alt=""/> : <p>{data.name} hasn't submitted an attempt yet</p> : ''}
    </div>
  );
};

PendingApprovalListEntry.propTypes = {
  player: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default PendingApprovalListEntry;
