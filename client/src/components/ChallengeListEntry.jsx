import React from 'react';

var ChallengeListEntry = ({challenge}) => (
  <div className="challenge"> 
  <div className="username"> {challenge.username} </div>
  <div className="text"> {challenge.text} </div>
  <div className="image"> <img src={challenge.image} /> </div>
  <div className={challenge.date}> </div>
  </div>
);

ChallengeListEntry.propTypes = {
  challenge: React.PropTypes.object.isRequired
};

export default ChallengeListEntry;