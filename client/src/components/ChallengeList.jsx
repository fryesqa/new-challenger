import React from 'react';
import ChallengeListEntry from './ChallengeListEntry.jsx';

var ChallengeList = ({challenges}) => (
  <div> 
   {challenges.map(function(challenge) {
    return <ChallengeListEntry key={challenge.id} challenge={challenge} />
   })}
  </div>
  );

ChallengeList.propTypes = {
  challenges: React.PropTypes.array.isRequired
};

export default ChallengeList;