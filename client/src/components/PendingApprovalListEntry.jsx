import React from 'react';

const PendingApprovalListEntry = ({player, adminClick, entities }) => {
  const data = entities.users[player.id];
  return ( 
    <div>
      <div onClick={adminClick}>{data.username}</div>
      <div className={player.attemptVisible ? "" : "hidden"}>
        {data.attempt ? <img src={data.attempt.imageUrl} alt=""/> : <p>{data.username} hasn't submitted an attempt yet</p>}
      </div>
    </div>
  );
}

PendingApprovalListEntry.propTypes = {
  player: React.PropTypes.object.isRequired,
  adminClick: React.PropTypes.func.isRequired
};

export default PendingApprovalListEntry;
