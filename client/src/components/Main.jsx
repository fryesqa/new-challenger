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

const listClass = classNames('main', 'list', 'card');

const Main = (props) => ( 
  <div>
    <div style={exampleStyle}>
      Example of Redux
      {/*bind so that on page load the props.increment wont run*/}
      <button onClick={props.increment.bind(null, props.index)}>Increment Using Actions</button>
      <div>Index: {props.index}</div>
    </div>  
    <ChallengeList cardClass={listClass} challenges={dummyData.challenges} currentUser={dummyData.currentUser} />
  </div>
)

export default Main;
