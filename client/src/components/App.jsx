import React from 'react';
import Navigation from './Navigation.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { auth } from './../auth.js';

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

//For attaching actions and state to the App

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from './../actions/appActions.js';

function mapStateToProps(state) {
  return {
    entities: state.entities,
    currentChallenge: state.currentChallenge,
    challengeList: state.challengeList,
    currentUser: state.currentUser,
    index: state.index,
    playersOfUserChallenges: state.playersOfUserChallenges
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}
const AppRedux = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppRedux;
