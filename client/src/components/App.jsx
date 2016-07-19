import React from 'react';
import { Link } from 'react-router';
import ChallengeList from './ChallengeList.jsx';
import UserProfile from './UserProfile.jsx'
import dummyData from './dummyData.js';

// challenges data is temporarily living in this.state.challenges
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: dummyData.challenges
    };
  }

  // for routing to components
    // use <Login /> for login
    // use <ChallengeCreateForm /> for challenge create form
    // note: may want to pass down the username as props to these or use it in redux's state

  render() {
    return (
      <div>
        <div>
          <Link to="user/1">
            <img src="http://vignette3.wikia.nocookie.net/bobsburgerpedia/images/3/32/Jimmy_Pesto.png/revision/latest?cb=20130305162049" alt=""/>
          </Link>
        </div>
        <Link to="/challenge/create">Create a Challenge</Link>
        {this.props.children || <ChallengeList challenges={this.state.challenges} />}
      </div>
    );
  }
}

export default App;
