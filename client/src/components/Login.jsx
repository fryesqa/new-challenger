import React from 'react';

// just some basic file structure, feel free to change
var Login = (props) => (
  <div> 
    <h1>New Challenger</h1>
    <div>Sign in below</div>
    <div className="login"> <img src="./images/facebook-login-button.png" onClick=""/> </div>
  </div>
  );

Login.propTypes = {
};

export default Login;