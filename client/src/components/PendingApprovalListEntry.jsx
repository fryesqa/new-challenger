import React from 'react';

const PendingApprovalListEntry = ({player, handleClick, entities }) => {
  const data = entities.users[player.id];
  console.log(player, data, entities);
  return ( 
    <div>
      <div onClick={handleClick}>{data.name}</div>
      <div className={player.attemptVisible ? "" : "hidden"}>
        {data.attempt ? <img src={data.attempt.imageUrl} alt=""/> : <p>{data.username} hasn't submitted an attempt yet</p>}
      </div>
    </div>
  );
}

PendingApprovalListEntry.propTypes = {
  player: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default PendingApprovalListEntry;
