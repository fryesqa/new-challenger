import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import ChallengeCreateForm from './components/ChallengeCreateForm.jsx';
import UserProfile from './components/UserProfile.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
    <Route path="/main" component={App}>
      <Route path="/challenge/create" component={ChallengeCreateForm} />
    </Route>
    <Route path="/user/:userId" component={UserProfile} />
  </Router>
), document.getElementById('app'));
