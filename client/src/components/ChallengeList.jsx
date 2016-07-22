import React from 'react';
import { Link } from 'react-router';
import ChallengeListEntry from './ChallengeListEntry.jsx';

// takes in props.challenges, and maps over to create ChallengeListEntry
const ChallengeList = ({classes, challenges, currentUser}) => (
  <div> 
   {challenges.map(function(challenge) {
    return (
      <div key={challenge.id}>
        <Link to={currentUser === challenge.creatorId ? `/challenge/${challenge.id}/admin` : `/challenge/${challenge.id}`}>
          <ChallengeListEntry classes={classes} challenge={challenge} />
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
