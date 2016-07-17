import React from 'react';
var Promise = require ('es6-promise').polyfill();
var fetch = require ('isomorphic-fetch');

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  // fetch('http://www.google.com')
  //     .then(function(response) {
  //         if (response.status >= 400) {
  //             throw new Error("Bad response from server");
  //         }
  //         console.log(response.json());
  //     })
  //     .then(function(stories) {
  //         console.log(stories);
  //     });

  render() {
    return (
      <div> 
        Image Upload
        <input type="file" />
        <input type="submit" />
      </div>
      );
  }

}

export default ImageUpload; 