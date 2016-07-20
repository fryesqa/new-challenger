import React from 'react';
import { Link } from 'react-router';
import ChallengeListEntry from './ChallengeListEntry.jsx';

// takes in props.challenges, and maps over to create ChallengeListEntry
const ChallengeList = ({challenges, currentUser}) => (
  <div> 
   {challenges.map(function(challenge, i) {
    return (
      <div key={challenge.id}>
        <Link to={currentUser === challenge.creatorId ? `/challenge/${challenge.id}/admin` : `/challenge/${challenge.id}`}>
          <h3> Challenge {i + 1}</h3> 
          <ChallengeListEntry challenge={challenge} />
        </Link>
      </div>
    );
   })}
  </div>
  );

ChallengeList.propTypes = {
  challenges: React.PropTypes.array.isRequired
};

export default ChallengeList;
