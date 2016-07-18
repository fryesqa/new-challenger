import React from 'react';

// Needs more styling depending on fields
var ChallengeListEntry = ({challenge}) => (
  <div className="challenge"> 
  <div className="image"> <img src={challenge.imageUrl} /> </div>
  <div className="name"> Challenge Name: {challenge.name} </div>
  <div className="username"> Challenge Creator: {challenge.username} </div>
  <div className="description"> The Challenge: {challenge.description} </div>
  <div className="category"> Challenge Category: {challenge.category} </div>
  <div className="number"> Number of challengers: {challenge.challengers} </div>
  <div className="successes"> Successfully completed: {challenge.successes} </div>
  <div className="createdAt">Challenge was issued on: {challenge.createdAt} </div>
  <div className="endTime">Challenge ends on {challenge.endTime} </div>
  </div>
);

ChallengeListEntry.propTypes = {
  challenge: React.PropTypes.object.isRequired
};

export default ChallengeListEntry;