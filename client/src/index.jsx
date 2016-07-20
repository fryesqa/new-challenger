import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import ChallengeCreateForm from './components/ChallengeCreateForm.jsx';
import UserProfile from './components/UserProfile.jsx';
import ChallengeInfoUser from './components/ChallengeInfoUser.jsx';
import ChallengeSubmitAttempt from './components/ChallengeSubmitAttempt.jsx';
import AdminChallenge from './components/AdminChallenge.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/challenge/create" component={ChallengeCreateForm} />
      <Route path="/challenge/:challengeId" component={ChallengeInfoUser} />
      <Route path="/challenge/:challengeId/admin" component={AdminChallenge} />
      <Route path="/challenge/:challengeId/submission" component={ChallengeSubmitAttempt} />
    </Route>
    <Route path="/user/:userId" component={UserProfile} />
  </Router>
), document.getElementById('app'));
