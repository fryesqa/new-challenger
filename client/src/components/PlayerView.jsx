import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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
  }

  handleSignUp() {
    console.log('handleSignUp')
  }

  render() {
    return (
      <Card style={cardStyle}>
        <CardHeader
          title={props.challenge.username}
          subtitle=""
          avatar="user-profile-image"
        />
        <CardMedia style={imageStyle}>
          <img src={props.challenge.imageUrl} />
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


        </CardText>
        <CardActions>
          <RaisedButton label="Sign Up!" primary={true} style={buttonStyle} onTouchTap={handleSignUp}/>
        </CardActions>
      </Card>
    );
  }
}


PlayerView.propTypes = {
  challenge: React.PropTypes.object.isRequired
};

export default PlayerView;
