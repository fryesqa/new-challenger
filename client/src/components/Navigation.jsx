import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <nav className="blue">
    <Link to="/"><span className="brand-logo">New Challenger</span></Link>
    <Link to="/login"><span className="right linkStyle">Login</span></Link>
    <Link to="/challenge/create"><span className="right linkStyle">Create Challenge</span></Link>
  </nav>
);

export default Navigation;