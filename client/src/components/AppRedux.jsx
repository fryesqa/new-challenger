import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as allActions from './../actions/allActions.js';
import App from './App.jsx';

function mapStateToProps(state) {
  return {
    challenge: state.challenge,
    index: state.index
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(allActions, dispatch);
}
const AppRedux = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppRedux;