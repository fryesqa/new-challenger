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
    this.handleClick = this.handleClick.bind(this);
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

    return (
      <Card style={adminChallengeStyle}>
        <CardHeader
          title={props.challenge.username}
          subtitle=""
          avatar="user-profile-image"
        />
        <CardMedia style={imageStyle}>
          <img src={props.challenge.url} />
        </CardMedia>
        <CardTitle title={props.challenge.name} subtitle={props.challenge.category} />
        <CardText>
          <div>{props.challenge.description}</div> 
          <br />
          <div>{props.challenge.successes} out of {props.challenge.challengers} challengers have completed this challenge! </div>
          <br />
          <div>Current challengers: {props.challenge.currentChallengers}</div>
          <div>Completed: {props.challenge.successNames}</div>
          <br />
          <div>Start: {props.challenge.createdAt} </div>
          <div>End: {props.challenge.endTime} </div>

        <PendingApprovalList challengers={dummyData.adminChallenge.challengers} handleClick={this.handleClick} />

        </CardText>
        <CardActions>
          <RaisedButton label="Sign Up!" primary={true} style={buttonStyle} onTouchTap={handleSignUp}/>
        </CardActions>
      </Card>
    );
  }
}
AdminChallenge.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default AdminChallenge;


