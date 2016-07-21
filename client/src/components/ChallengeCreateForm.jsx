import React from 'react';
import ImageUpload from './ImageUpload.jsx';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// probably want to use redux-form instead
// http://redux-form.com/5.3.1/#/getting-started?_k=7i191c

class ChallengeCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      file: []
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

  handleCategory(event, index, value) {
    // using materialUI
    console.log(value);
    this.setState({
      category: value
    })
  }

  handleImage(e) {
    console.log(e.target);
    // not sure what file to grab here... 
    this.setState({
      file: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(
      'challenge name:', this.state.name, '/',
      'challenge description:', this.state.description, '/',
      'challenge category:', this.state.category, '/',
      'challenge imageFile:', this.state.file);
    this.setState({
      name: '',
      description: '',
      category: '',
      file: []
    });
  }

  render() {
    return (
    <div className="row">
      <h3> Create a challenge! </h3>
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
            <SelectField 
            value={this.state.category} 
            floatingLabelText="Challenge Category"
            onChange={this.handleCategory} >
              {this.categories.map((category, i) => {
              return (
                <MenuItem key={i} value={category.value} primaryText={category.label} />
                );
               })}
            </SelectField>
           </div>
          <div className="file-field input-field">
            <div className="btn">
              <span>Upload image</span>
              <input type="file" onChange={this.handleImage}/>
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

// if want to validate forms https://github.com/christianalfoni/formsy-react


export default ChallengeCreateForm;