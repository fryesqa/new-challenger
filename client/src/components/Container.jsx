import React from 'react';

class Container extends React.Component {
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
      currentUser: this.props.currentUser,
      playersOfUserChallenges: this.props.playersOfUserChallenges,
      entities: this.props.entities
    };
    // will need to pass props to children
    return (
      <div>
        {React.cloneElement(this.props.children, passedProps)}
      </div>
    )
  } 
}

export default Container;
