import React from 'react';
import ChallengerList from './ChallengerList.jsx';

class AdminChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    $(e.target).next().toggleClass('hidden');
  }

  render() {
    return ( 
      <div>
        <img src={this.props.challenge.icon} alt="" />
        <h2>{this.props.challenge.name}</h2>
        <img src={this.props.challenge.imageUrl} alt="" />
        <p>{this.props.challenge.description}</p>
        <ChallengerList challengers={this.props.challenge.challengers} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default AdminChallenge;
