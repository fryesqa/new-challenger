import React from 'react';

class ChallengeContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const passedProps = {
      entities: this.props.entities,
      currentChallenge: this.props.currentChallenge,
      createChallenge: this.props.createChallenge,
      signUpChallenge: this.props.signUpChallenge,
      currentUser: this.props.currentUser,
      playersOfUserChallenges: this.props.playersOfUserChallenges,
      adminClick: this.props.adminClick,
      addPlayers: this.props.addPlayers,
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
