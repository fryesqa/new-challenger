import React from 'react';

class ChallengeContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  idsToChallenges(ids) {
    return ids.map(id => props.entities.challenges[id]);
  }

  render() {
    const passedProps = {
      currentChallenge: this.props.currentChallenge,
      createChallenge: this.props.createChallenge,
      currentUser: this.props.currentUser
    };
    // will need to pass props to children
    return (
      <div> 
          {React.cloneElement(this.props.children, passedProps)}
      </div>
    )
  } 
}

//For attaching actions and state to the App
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as challengeActions from './../actions/challengeActions.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(challengeActions, dispatch);
}

export default connect(null, mapDispatchToProps)(ChallengeContainer);