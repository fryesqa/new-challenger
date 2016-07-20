import React from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation.jsx';
import dummyData from './dummyData.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// challenges data is temporarily living in this.state.challenges
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: dummyData.challenges,
      userId: dummyData.currentUser // dummy value for testing purposes, replace with signed in user info
    };
  }

  // for routing to components
    // use <Login /> for login
    // use <ChallengeCreateForm /> for challenge create form
    // note: may want to pass down the username as props to these or use it in redux's state

  render() {
    return (
      <div className="container">
        <div>
          <Navigation />
          <Link to={`/user/${this.state.userId}`}>
            <img src="http://vignette3.wikia.nocookie.net/bobsburgerpedia/images/3/32/Jimmy_Pesto.png/revision/latest?cb=20130305162049" alt=""/>
          </Link>
        </div>
        <Link to="/challenge/create">Create a Challenge</Link>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
