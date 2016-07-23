import React from 'react';

var Login = (props) => (
  <div> 
    <h1>New Challenger</h1>
    <div>Sign in below</div>
    <div className="login"> <a href="/auth/facebook"><img src="./images/facebook-login-button.png" onClick=""/></a> </div>
  </div>
);

Login.propTypes = {
};

export default Login;
