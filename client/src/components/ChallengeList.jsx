import React from 'react';
import { Link } from 'react-router';
import ChallengeListEntry from './ChallengeListEntry.jsx';

// takes in props.challenges, and maps over to create ChallengeListEntry
const ChallengeList = ({challenges, currentUser, entities}) => {
  challenges = challenges.map(id => entities.challenges[id]);
  return ( 
    <div> 
     {challenges.map(function(challenge) {
      return (
        <div key={challenge.id}>
          <Link to={currentUser === challenge.creatorId ? `/challenges/${challenge.id}/admin` : `/challenges/${challenge.id}`}>
            <ChallengeListEntry challenge={challenge} />
          </Link>
        </div>
      );
     })}
    </div>
  )
};

ChallengeList.propTypes = {
  challenges: React.PropTypes.array.isRequired,
  entities: React.PropTypes.object.isRequired
};

export default ChallengeList;
