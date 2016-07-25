import React from 'react';
import { Link } from 'react-router';

//Navigation bar was made with materialize, not Material UI
const Navigation = () => (
  <nav className="blue">
    <Link to="/"><span className="brand-logo">New Challenger</span></Link>
    <div className="login"> <a href="/auth/facebook"><img src="./images/facebook-login-button.png" onClick=""/></a> </div>
    <Link to="/challenges/create"><span className="right linkStyle">Create Challenge</span></Link>
  </nav>
);

export default Navigation;
