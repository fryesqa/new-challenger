import React from 'react';
import Router from 'react-router';
import ChallengeList from './ChallengeList.jsx';
import Login from './Login.jsx';
import ChallengeCreateForm from './ChallengeCreateForm.jsx';
import dummyData from './dummyData.js';

// challenges data is temporarily living in this.state.challenges
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: dummyData
    };
  }

  // for routing to components 
    // use <Login /> for login
    // use <ChallengeCreateForm /> for challenge create form
    // note: may want to pass down the username as props to these or use it in redux's state

  render() {
    return (
      <div>
        <h1>Home page</h1> 
        <ChallengeCreateForm /> 
        <ChallengeList challenges={this.state.challenges} />
      </div>
    )
  }
}

export default App;
