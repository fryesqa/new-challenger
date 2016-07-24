import React from 'react';
import { Navigation } from './Components.js';

class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  idsToChallenges(ids) {
    return ids.map(id => props.entities.challenges[id]);
  }

  render() {
    const passedProps = {
      entities: this.props.entities,
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

export default Container;
