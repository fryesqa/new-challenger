import React from 'react';
import PendingApprovalListEntry from './PendingApprovalListEntry.jsx';

const PendingApprovalList = ({challengers, handleClick}) => (
  <div>
  {
    challengers.map(challenger => {
      return <PendingApprovalListEntry challenger={challenger} key={challenger.id} handleClick={handleClick} />
    })
  }
  </div>
);

PendingApprovalList.propTypes = {
  challengers: React.PropTypes.array.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default PendingApprovalList;
