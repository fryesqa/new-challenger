import React from 'react';
import Router from 'react-router';
import ChallengeList from './ChallengeList.jsx'

const data = [{
        id: '1',
        username: 'Bob Belcher',
        text: 'Eat 5 hamburgers',
        image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png",
        date: new Date()
      }, {
        id: '2',
        username: 'Bobby Belchy',
        text: 'Eat 10 hamburgers',
        image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png",
        date: new Date()
      }];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: data
    };
  }

  render() {
    return (
      <div>
        <h1>New Challenger</h1> 
        <ChallengeList challenges={this.state.challenges} />
      </div>
    )
  }
}

export default App;
