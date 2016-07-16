import React from 'react';
import Router from 'react-router';
import ChallengeList from './ChallengeList.jsx';
import Login from './Login.jsx';

// dummy data for populating challenge components
const data = [{
        id: '1',
        username: 'Bob Belcher',
        text: 'Eat 5 hamburgers',
        image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png",
        createdAt: new Date().toString()
      }, {
        id: '2',
        username: 'Bobby Belchy',
        text: 'Eat 10 hamburgers',
        image: "http://i.onionstatic.com/avclub/5748/94/original/304.jpg",
        createdAt: new Date().toString()
      }];

// challenges data is living in this.state.challenges
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
        <Login />
        <h1>New Challenger</h1> 
        <ChallengeList challenges={this.state.challenges} />
      </div>
    )
  }
}

export default App;
