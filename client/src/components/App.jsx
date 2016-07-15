import React from 'react';
import Router from 'react-router';
// import ChallengeList from './ChallengeList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [{
        username: "Bob Belcher",
        text: "Eat 5 hamburgers",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png",
        date: new Date()
      }]
    };
  }

  render() {
    return (
      <div>
        <h1>New Challenger</h1> 
      </div>

      )
  }
}

export default App;
