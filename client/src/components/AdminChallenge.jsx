import React from 'react';
import PendingApprovalList from './PendingApprovalList.jsx';
import dummyData from './dummyData.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const adminStyle = {
  fontFamily: 'Acme, sans-serif',
  fontSize: '2em',
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
  overflow: 'hidden',
  objectFit: 'contain'
}

class AdminChallenge extends React.Component {
  constructor(props) {
    super(props);
    console.log('adminchallenge', props);
  }

  componentWillMount() {
    //check if user is logged
    if(!this.props.currentUser) {
      this.context.router.push('/');
    }
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
    console.log('ac', this.props);
    return (
      <Card style={adminStyle}>
        <CardHeader
          title={challenge.username}
          subtitle=""
          avatar="user-profile-image"
        />
        <CardMedia style={imageStyle}>
          <img style={imageStyle} src={challenge.url} />
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

        <PendingApprovalList players={this.props.playersOfUserChallenges[id]} handleClick={this.props.adminClick.bind(null, id)} entities={this.props.entities} />

        </CardText>
      </Card>
    );
  }
}
AdminChallenge.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default AdminChallenge;


