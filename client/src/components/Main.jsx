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

const styles = {
  cardStyle,
  imageStyle
}

const Main = (props) => ( 
  <div>
    <ChallengeList styles={styles} challenges={props.challengeList} currentUser={dummyData.currentUser} />
    <div style={exampleStyle}>
      Example of Redux
      {/*bind so that on page load the props.increment wont run*/}
      <button onClick={props.increment.bind(null, props.index)}>Increment Using Actions</button>
      <div>Index: {props.index}</div>
    </div>  
  </div>
)

export default Main;
