import React from 'react';
import Router from 'react-router';
import ChallengeList from './ChallengeList.jsx';
import Login from './Login.jsx';
import ImageUpload from './ImageUpload.jsx';
import dummyData from './dummyData.js';

// challenges data is living in this.state.challenges
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: dummyData
    };
  }

  // for routing to components 
    // use <Login /> for login
    // use <ImageUpload /> for image upload

  render() {
    return (
      <div>
        <h1>Home page</h1> 
        <ImageUpload /> 
        <ChallengeList challenges={this.state.challenges} />
      </div>
    )
  }
}

export default App;
