import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12,
  float: 'right'
};


const cardStyle = {
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
    console.log(props);
    this.handleSignUp = this.handleSignUp.bind(this);

  }

  handleSignUp() {
    console.log('handleSignUp')
  }

  render() {
    return (
      <Card style={cardStyle}>
        <CardHeader
          title={this.props.currentChallenge.username}
          subtitle=""
          avatar="user-profile-image"
        />
        <CardMedia style={imageStyle}>
          <img src={this.props.currentChallenge.imageUrl} />
        </CardMedia>
        <CardTitle title={this.props.currentChallenge.name} subtitle={this.props.currentChallenge.category} />
        <CardText>
          <div>{this.props.currentChallenge.description}</div> 
          <br />
          <div>{this.props.currentChallenge.successes} out of {this.props.currentChallenge.challengers} challengers have completed this currentChallenge! </div>
          <br />
          <div>Current challengers: {this.props.currentChallenge.currentChallengers}</div>
          <div>Completed: {this.props.currentChallenge.successNames}</div>
          <br />
          <div>Start: {this.props.currentChallenge.createdAt} </div>
          <div>End: {this.props.currentChallenge.endTime} </div>


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
