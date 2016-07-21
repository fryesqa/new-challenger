import React from 'react';

const PendingApprovalListEntry = ({challenger, handleClick}) => (
  <div>
    <div onClick={handleClick}>{challenger.username}</div>
    <div className="hidden">
      {challenger.attempt ? <img src={challenger.attempt.imageUrl} alt=""/> : <p>{challenger.username} hasn't submitted an attempt yet</p>}
    </div>
  </div>
) 

PendingApprovalListEntry.propTypes = {
  challenger: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default PendingApprovalListEntry;
