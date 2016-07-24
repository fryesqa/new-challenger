import React from 'react';
import PendingApprovalList from './PendingApprovalList.jsx';
import dummyData from './dummyData.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const adminStyle = {
  width: '80%',
  overflow: 'hidden',
  float: 'left',
  'marginTop': '2%',
  'marginLeft': '10%',
  'marginRight': '10%'
}

const imageStyle = {
  width: '100%',
  height: '400px',
  overflow: 'hidden'
}

class AdminChallenge extends React.Component {
  constructor(props) {
    super(props);
    console.log('adminchallenge', props);
  }
 
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    $(e.target).next().toggleClass('hidden');
  }

  //Instead of lines 22-25 insert a ChallengeListEntry with the challenge data as props
  //Figure out styling later
  render() {
    const id = this.props.params.challengeId;
    const challenge = this.props.entities.challenges[id];
    return (
      <Card style={adminChallengeStyle}>
        <CardHeader
          title={challenge.username}
          subtitle=""
          avatar="user-profile-image"
        />
        <CardMedia style={imageStyle}>
          <img src={challenge.url} />
        </CardMedia>
        <CardTitle title={challenge.name} subtitle={challenge.category} />
        <CardText>
          <div>{challenge.description}</div> 
          <br />
          <div>{challenge.successes} out of {challenge.challengers} challengers have completed this challenge! </div>
          <br />
          <div>Current challengers: {challenge.currentChallengers}</div>
          <div>Completed: {challenge.successNames}</div>
          <br />
          <div>Start: {challenge.createdAt} </div>
          <div>End: {challenge.endTime} </div>

        <PendingApprovalList players={this.props.playersOfUserChallenges[id]} handleClick={this.props.adminClick} entities={this.props.entities} />

        </CardText>
        <CardActions>
          <RaisedButton label="Sign Up!" primary={true} style={buttonStyle} onTouchTap={handleSignUp}/>
        </CardActions>
      </Card>
    );
  }
}

export default AdminChallenge;


