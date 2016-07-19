import React from 'react';

const AdminChallenge = ({challenge}) => ( 
  <div>
    <img src={challenge.icon} alt=""/>
    <h2>{challenge.name}</h2>
    <img src={challenge.imageUrl} alt=""/>
    <p>{challenge.description}</p>
    {
      challenge.challengers.map(challenger => {
        return <div key={challenger.id}>{challenger.username}</div>
      })
    }
  </div>
);

export default AdminChallenge;
