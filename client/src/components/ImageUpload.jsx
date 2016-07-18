import React from 'react';
import Dropzone from 'react-dropzone'
var Promise = require ('es6-promise').polyfill();
var fetch = require ('isomorphic-fetch');

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  onDrop(files) {
    console.log('Received files:', files);
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

}

export default ImageUpload; 