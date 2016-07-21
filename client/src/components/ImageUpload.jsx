import React from 'react';
import Dropzone from 'react-dropzone';
var Promise = require ('es6-promise').polyfill();
var fetch = require ('isomorphic-fetch');

// DON'T USE THIS, IT IS CURRENTLY BROKEN, SEE COMMENTS BELOW
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: [],
    }
    this.onDrop.bind(this);
  }

  onDrop(imageFile) {
    console.log('Received imageFile:', imageFile);
    // this.setState is not running. onDrop doesn't have this context, tried binding above.
    this.setState({
      imageFile: imageFile
    });
    console.log(this.state.imageFile);
  }

  // fetch('localhost:3000/upload')
  //     .then(function(response) {
  //         if (response.status >= 400) {
  //             throw new Error("Bad response from server");
  //         }
  //         console.log(response.json());
  //     })
  //     .then(function(stories) {
  //         console.log(stories);
  //     });

  // or if just want to use html
  // <input type="file" />
  // <input type="submit" />

  

  render() {
    return (
      <div> 
        Image Upload
        <Dropzone onDrop={this.onDrop} multiple={false}>
          <div>Drop an image here, or click to select an image to upload.</div>
        </Dropzone>
      </div>
      );
  }
  // trying to do image preview but the below isn't working, need to debug
    // {this.state.imageFile.length > 0 ? <div>
    // <h2>Uploading {this.state.imageFile.length} imageFile...</h2>
    // <div>{this.state.imageFile.map((file) => <img src={file.preview} /> )}</div>
    // </div> : null}


}

export default ImageUpload; 