import React from 'react';
import ChallengeCreateImageUpload from './ChallengeCreateImageUpload.jsx';
import Select from 'react-select';

class ChallengeCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: ''
    };
    this.categories = [
      { value: 'online', label: 'Online' },
      { value: 'fitness', label: 'Fitness' },
      { value: 'food', label: 'Food' },
      { value: 'social', label: 'Social' },
      { value: 'other', label: 'Other' }
    ];
    // should probably use lodash's bindAll, this is ridiculous
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleName(e){
    this.setState({
      name: e.target.value
    });
  }

  handleDescription(e){
    this.setState({
      description: e.target.value
    });
  }

  handleCategory(value) {
    this.setState({
      category: value
    })
  }

  // currently not working
  handleImage(imageFileData) {
    console.log(imageFileData)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(
      'challenge name:', this.state.name, '/',
      'challenge description:', this.state.description, '/',
      'challenge category:', this.state.category.value);
    this.setState({
      name: '',
      description: '',
      category: ''
    });
  }

  render() {
    return (
    <div>
      <h3> Create a challenge! </h3>
      <form 
        name="challenge-create" 
        onSubmit={this.handleSubmit} >
        Challenge Name: 
          <input 
            type="text" 
            name="challenge-name" 
            value={this.state.name} 
            onChange={this.handleName} 
            placeholder="What's the name of your challenge?"/>
        Challenge Description:
          <textarea 
            name="challenge-description" 
            rows="5" 
            value={this.state.description} 
            onChange={this.handleDescription} 
            placeholder="What's your challenge about?"/>
        Challenge Category: 
          <Select
            name="form-field-name"
            value={this.state.category}
            options={this.categories}
            onChange={this.handleCategory}
            placeholder="What category is your challenge?"/>
        <ChallengeCreateImageUpload handleImage={this.handleImage}/>
        
        <input type="submit"/>

      </form>
    </div>
    );
  }
}

export default ChallengeCreateForm;