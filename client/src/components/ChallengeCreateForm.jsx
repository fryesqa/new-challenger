import React from 'react';
import ImageUpload from './ImageUpload.jsx';
import className from 'classname';

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

  handleCategory(e) {
    // THIS DOESN'T WORK BECAUSE MATERIALIZE OVERWRITES SELECT AND MANIPULATES DOM, DOESN'T PASS IN THIS HANDLER
    console.log(e);
    this.setState({
      category: e.target.value
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
      'challenge category:', this.state.category);
    this.setState({
      name: '',
      description: '',
      category: ''
    });
  }

  render() {
    return (
    <div className="row">
      <h3> Create a challenge! </h3>
      <ImageUpload />
      <form 
        name="challenge-create" 
        onSubmit={this.handleSubmit}
        className="col s10" >
          <div className="input-field">
            <input
              className="validate" 
              type="text" 
              id="challenge_name" 
              value={this.state.name} 
              onChange={this.handleName} 
              />
            <label htmlFor="challenge_name">Challenge Name</label>
          </div>
          <div className="input-field">
          <textarea 
            className="materialize-textarea"
            id="challenge_description"
            value={this.state.description} 
            onChange={this.handleDescription} 
            />
          <label htmlFor="challenge_description">Challenge Description</label>
          </div>
          <div className="input-field">
            <select value={this.state.category} onChange={this.handleCategory}>
              <option value="" disabled></option>
              {this.categories.map(function(category, i) { 
                return (<option key={i} value={category.value}>{category.label}</option>);
              })}
            </select>
            <label>Challenge Category</label>
          </div>
          <div className="file-field input-field">
            <div className="btn">
              <span>Upload image</span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
          <input className="btn" type="submit"/>

        
      </form>
    </div>
    );
  }
}



export default ChallengeCreateForm;