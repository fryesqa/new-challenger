import React from 'react';
import PendingApprovalListEntry from './PendingApprovalListEntry.jsx';

const PendingApprovalList = ({ players, handleClick, entities }) => (
  <div>
  {
    players.map(player => {
      return <PendingApprovalListEntry player={player} key={player.id} handleClick={handleClick} entities={entities} />
    })
  }
  </div>
);

PendingApprovalList.propTypes = {
  players: React.PropTypes.array.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default PendingApprovalList;
