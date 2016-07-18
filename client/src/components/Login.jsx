import React from 'react';

// just some basic file structure, feel free to change
var Login = (props) => (
  <div> 
    <div className="login"> <a href="/auth/facebook"><img src="./images/facebook-login-button.png" onClick=""/></a> </div>
  </div>
  );

Login.propTypes = {
};

export default Login;