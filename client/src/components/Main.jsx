import React from 'react';
import ChallengeList from './ChallengeList.jsx';
import dummyData from './dummyData.js';
import classNames from 'classnames';


const exampleStyle = {
  'padding':'20px',
  'fontFamily':'futura',
  'backgroundColor': 'pink',
  'width': '200px'
};

const cardClass = classNames('main', 'list', 'card');
const imageClass = classNames('main', 'list', 'card', 'image');
const imageStyle = {
  width: '100%',
  height: '150px'
}

const classes = {
  cardClass,
  imageClass,
  imageStyle
}

const Main = (props) => ( 
  <div>
    <ChallengeList classes={classes} challenges={props.challengeList} currentUser={dummyData.currentUser} />
  </div>
)

export default Main;
    // <div style={exampleStyle}>
    //   Example of Redux
    //   {/*bind so that on page load the props.increment wont run*/}
    //   <button onClick={props.increment.bind(null, props.index)}>Increment Using Actions</button>
    //   <div>Index: {props.index}</div>
    // </div>  
