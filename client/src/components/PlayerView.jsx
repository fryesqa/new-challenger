import React from 'react';
import { Link } from 'react-router';
import ChallengeListEntry from './ChallengeListEntry.jsx'
import classNames from 'classnames';

const playerClass = classNames('player', 'card');

const classes = {
  cardClass: classNames('player', 'card'),
  imageClass: classNames('player', 'card', 'image')
}

const cardStyle = {
  width: '80%',
  overflow: 'hidden',
  float: 'left',
  'margin-top': '2%',
  'margin-left': '10%',
  'margin-right': '10%'
}

const imageStyle = {
  width: '100%',
  height: '400px',
  overflow: 'hidden'
}

const styles = {
  cardStyle,
  imageStyle
}
//Get rid of 31-42 and replace with ChallengeListEntry with props
const PlayerView = (props) => (
  <div>
    <ChallengeListEntry challenge={props.challenge} styles={styles}/>
    <div>Current challengers: {props.challenge.currentChallengers}</div>
    <div>Completed: {props.challenge.successNames}</div>
  </div>
)

export default PlayerView;
