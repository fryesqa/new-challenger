import React from 'react';

const PendingApprovalListEntry = ({player, handleClick, entities }) => {
  const data = entities.users[player.id];
  return ( 
    <div>
      <div onClick={handleClick}>{data.name}</div>
      {player.attemptVisible ? data.attempt ? <img src={data.attempt.imageUrl} alt=""/> : <p>{data.name} hasn't submitted an attempt yet</p> : ''}
    </div>
  );
}

PendingApprovalListEntry.propTypes = {
  player: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default PendingApprovalListEntry;
