import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <div>
    <Link to="/">New Challenger</Link>
    <Link to="/challenge/create">Create A Challenge</Link>
    <Link to="/login">Login</Link>
  </div>
);

export default Navigation;
