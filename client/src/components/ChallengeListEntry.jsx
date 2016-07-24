import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames';


const buttonStyle = {
  margin: 12,
  float: 'right'
};

const cardStyle = {
  width: '30%',
  height: '600px',
  overflow: 'hidden',
  float: 'left',
  margin: '1%'
}

const imageStyle = {
  width: '100%',
  height: '200px',
  overflow: 'hidden'
}


// Needs more styling depending on fields
class ChallengeListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignUp() {
    console.log('handleSignUp')
  }

  render() {
    return (
      <Card style={cardStyle}>
        <CardHeader
          title={this.props.challenge.username}
          subtitle=""
          avatar="user-profile-image"
        />
        <CardMedia style={imageStyle}>
          <img src={this.props.challenge.imageUrl} />
        </CardMedia>
        <CardTitle title={this.props.challenge.name} subtitle={this.props.challenge.category} />
        <CardText>
          <div>{this.props.challenge.description}</div> 
          <br />
          <div>{this.props.challenge.successes} out of {this.props.challenge.challengers} challengers have completed this challenge! </div>
          <br />
          <div>Current challengers: {this.props.challenge.currentChallengers}</div>
          <div>Completed: {this.props.challenge.successNames}</div>
          <br />
          <div>Start: {this.props.challenge.createdAt} </div>
          <div>End: {this.props.challenge.endTime} </div>


        </CardText>
        <CardActions>
          <RaisedButton label="Sign Up!" primary={true} style={buttonStyle} onTouchTap={this.handleSignUp}/>
        </CardActions>
      </Card>
    );
  }

};

ChallengeListEntry.propTypes = {
  challenge: React.PropTypes.object.isRequired
};

export default ChallengeListEntry;