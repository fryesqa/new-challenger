import React from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation.jsx';
import dummyData from './dummyData.js';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// challenges data is temporarily living in this.state.challenges
class App extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {
      challenges: dummyData.challenges,
      userId: dummyData.currentUser // dummy value for testing purposes, replace with signed in user info
    };*/
  }

  componentDidMount() {
    this.props.fetchChallenges();
    this.props.fetchUsers();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="container">
          <div>
            <Navigation />
          </div>
            {/*Passes this redux state to first children*/}
          <div>
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
          //   <Link to={`/user/${this.state.userId}`}>
          //     <img src="http://vignette3.wikia.nocookie.net/bobsburgerpedia/images/3/32/Jimmy_Pesto.png/revision/latest?cb=20130305162049" alt=""/>
          //   </Link>
          // </div>
          // <Link to="/challenge/create">Create a Challenge</Link>
          // <div>
