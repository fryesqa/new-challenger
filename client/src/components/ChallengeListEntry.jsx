import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const imageStyle = {
  height: '200px'
};
const buttonStyle = {
  margin: 12,
  float: 'right'
};

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
      <Card className="challenge list">
        <CardHeader
          title={this.props.challenge.username}
          subtitle=""
          avatar="user-profile-image"
        />
        <CardMedia>
          <img style={imageStyle} src={this.props.challenge.imageUrl} />
        </CardMedia>
        <CardTitle title={this.props.challenge.name} subtitle={this.props.challenge.category} />
        <CardText>
          <div>{this.props.challenge.description}</div> 
          <br />
          <div>{this.props.challenge.successes} out of {this.props.challenge.challengers} challengers have completed this challenge! </div>
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