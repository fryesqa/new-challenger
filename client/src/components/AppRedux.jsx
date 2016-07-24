//For attaching actions and state to the App

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from './../actions/appActions.js';
import App from './App.jsx';

function mapStateToProps(state) {
  return {
    entities: state.entities,
    currentChallenge: state.currentChallenge,
    challengeList: state.challengeList,
    index: state.index
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}
const AppRedux = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppRedux;
