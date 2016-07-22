import React from 'react';
import { Link } from 'react-router';
import ChallengeListEntry from './ChallengeListEntry.jsx'
import classNames from 'classnames';

const playerClass = classNames('player', 'card');

const classes = {
  cardClass: classNames('player', 'card'),
  imageClass: classNames('player', 'card', 'image')
}

// dummy data for challenge
var challenge = {
        id: '1',
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png",
        name: 'Burger time!',
        profilePic: './icon.jpg',
        username: 'Bob Belcher', //creatorId?
        description: 'Eat 5 hamburgers',
        category: 'Food',
        challengers: ['sloppy joe', 'hungry hippo', 'big mac', 'spicy chicken', 'burger king'],
        successes: ['sloppy joe', 'big mac'],
        currentChallengers: ['spicy chicken', 'burger king'],
        createdAt: new Date().toString(),
        endTime: new Date().toString()
      };

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
  </div>
)

export default PlayerView;
