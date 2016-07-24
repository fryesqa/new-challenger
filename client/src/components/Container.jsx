import React from 'react';

class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  idsToChallenges(ids) {
    return ids.map(id => props.entities.challenges[id]);
  }

  render() {
    const passedProps = { challenge: this.props.currentChallenge, createChallenge: this.props.createChallenge };
    // will need to pass props to children
    return (
      <div>
        {React.cloneElement(this.props.children, passedProps)}
      </div>
    )
  } 
}

export default Container;
