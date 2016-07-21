import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// just some basic file structure, feel free to change
var Login = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div> 
      <h1>New Challenger</h1>
      <div>Sign in below</div>
      <div className="login"> <a href="/auth/facebook"><img src="./images/facebook-login-button.png" onClick=""/></a> </div>
    </div>
  </MuiThemeProvider>
  );

Login.propTypes = {
};

export default Login;