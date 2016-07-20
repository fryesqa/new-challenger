import React from 'react';
import ChallengeList from './ChallengeList.jsx';
import dummyData from './dummyData.js';

const Main = (props) => ( 
  <div>
    <ChallengeList challenges={dummyData.challenges} currentUser={dummyData.currentUser} />
  </div>
)

export default Main;
