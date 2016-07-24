import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12,
  float: 'right'
};

const playerStyle = {
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

class PlayerView extends React.Component {
  constructor(props) {
    super(props)
    // grab the challengeId from the url
    const challengeId = props.params.challengeId;
    // find the correct challenge from props.entities.challenges
    this.challenge = props.entities.challenges[challengeId];

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp() {
    console.log('handleSignUp')
  }

  render() {
    return (
      <Card style={playerStyle}>
        <CardHeader
          title={this.challenge.username}
          subtitle=""
          avatar="user-profile-image"
        />
        <CardMedia style={imageStyle}>
          <img src={this.challenge.imageUrl} />
        </CardMedia>
        <CardTitle title={this.challenge.name} subtitle={this.challenge.category} />
        <CardText>
          <div>{this.challenge.description}</div> 
          <br />
          <div>{this.challenge.successes} out of {this.challenge.challengers} challengers have completed this currentChallenge! </div>
          <br />
          <div>Current challengers: {this.challenge.currentChallengers}</div>
          <div>Completed: {this.challenge.successNames}</div>
          <br />
          <div>Start: {this.challenge.createdAt} </div>
          <div>End: {this.challenge.endTime} </div>


        </CardText>
        <CardActions>
          <RaisedButton label="Sign Up!" primary={true} style={buttonStyle} onTouchTap={this.handleSignUp}/>
        </CardActions>
      </Card>
    );
  }
}


// PlayerView.propTypes = {
//   currentChallenge: React.PropTypes.object.isRequired
// };

export default PlayerView;
