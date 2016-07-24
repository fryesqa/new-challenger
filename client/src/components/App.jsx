import React from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation.jsx';
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
        <Navigation />    

          {/*Passes this redux state to first children*/}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;
