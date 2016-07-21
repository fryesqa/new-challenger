import React from 'react';
import ChallengeList from './ChallengeList.jsx';
import dummyData from './dummyData';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: dummyData.user
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <div>
            <img src={this.state.user.imageUrl} alt=""></img>
            <span>
              <div>{this.state.user.username}</div>
              <div>{this.state.user.email}</div>
            </span>
          </div>
          <div>
            <h3>My Challenges</h3>
            <ChallengeList challenges={this.state.user.challengesCreated} />
          </div>
          <div>
            <h4>Current Challenges</h4>
            <ChallengeList challenges={this.state.user.challengesTaken} />
          </div>
          <div>
            <h4>Completed Challenges</h4>
            <ChallengeList challenges={this.state.user.challengesCompleted} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UserProfile;
