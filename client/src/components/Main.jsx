import React from 'react';
import ChallengeList from './ChallengeList.jsx';
import Navigation from './Navigation.jsx';
import classNames from 'classnames';

const Main = ({ challengeList, entities, currentUser, addPlayer, history }) => ( 
  <div>
    <div className="row center-align">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <p>
            New Challenger is a fun new social web app for challenging your friends to new activities and creating rewards for completion. <br /> Sign up to take other people's challenges and earn rewards! <br />
            <span className='subtext'>Image uploads and smart image verification technology are used to prove if someone completed a challenge. Automated payment to users or charities can be set up with PayPal & Stripe.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
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
