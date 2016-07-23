import React from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation.jsx';
import dummyData from './dummyData.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChallenges();
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="container">
        <div>
          <Navigation />
        </div>
          {/*Passes this redux state to first children*/}
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}

export default App;
