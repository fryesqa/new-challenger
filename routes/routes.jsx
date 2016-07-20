import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Main, Login, AdminChallenge, ChallengeCreateForm, UserProfile, ChallengeInfoUser, SubmitAttempt } from '../client/src/components/Components.js';

module.exports = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/challenge/create" component={ChallengeCreateForm} />
      <Route path="/challenge/:challengeId" component={ChallengeInfoUser} />
      <Route path="/challenge/:challengeId/admin" component={AdminChallenge} />
      <Route path="/challenge/:challengeId/submission" component={SubmitAttempt} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/user/:userId" component={UserProfile} />
  </div>
);
