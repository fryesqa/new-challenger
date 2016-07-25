import React from 'react';
import ChallengeList from './ChallengeList.jsx';
import Navigation from './Navigation.jsx';
import dummyData from './dummyData.js';
import classNames from 'classnames';

const Main = ({ challengeList, entities, currentUser, addPlayer, history }) => ( 
  <div>
    <ChallengeList challenges={challengeList.items} entities={entities} currentUser={currentUser} addPlayer={addPlayer} history={history} />
  </div>
)

export default Main;

// const exampleStyle = {
//   'padding':'20px',
//   'fontFamily':'futura',
//   'backgroundColor': 'pink',
//   'width': '200px'
// };
    
    // <div style={exampleStyle}>
    //   Example of Redux
    //   {/*bind so that on page load the props.increment wont run*/}
    //   <button onClick={props.increment.bind(null, props.index)}>Increment Using Actions</button>
    //   <div>Index: {props.index}</div>
    // </div>  
