import React from 'react';
import ChallengeList from './ChallengeList.jsx';
import dummyData from './dummyData';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: dummyData.user 
    };
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.user.imageUrl}></img>
          <span>
            <div>{this.state.user.username}</div>
            <div>{this.state.user.email}</div>
          </span> 
        </div>
        <h3>My Challenges</h3>
        <ChallengeList challenges={this.state.user.createdChallenges}/>
      </div>
    )
  } 
}

export default UserProfile
