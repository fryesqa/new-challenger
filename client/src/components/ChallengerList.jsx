import React from 'react';
import ChallengerListEntry from './ChallengerListEntry.jsx';

const ChallengerList = ({challengers, handleClick}) => (
  <div>
  {
    challengers.map(challenger => {
      return <ChallengerListEntry challenger={challenger} key={challenger.id} handleClick={handleClick} />
    })
  }
  </div>
);

ChallengerList.propTypes = {
  challengers: React.PropTypes.array.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default ChallengerList;
