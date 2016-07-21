import React from 'react';
import { Route, IndexRoute } from 'react-router';
//import { App, Main, Login, AdminChallenge, ChallengeCreateForm, UserProfile, PlayerList, SubmitAttempt } from '../client/src/components/Components.js';
import { AppRedux, Main, Login, AdminChallenge, ChallengeCreateForm, UserProfile, PlayerView, SubmitAttempt } from '../client/src/components/Components.js';

module.exports = (
  <div>
    <Route path="/" component={AppRedux}>
      <IndexRoute component={Main} />
      <Route path="/challenge/create" component={ChallengeCreateForm} />
      <Route path="/challenge/:challengeId" component={PlayerView} />
      <Route path="/challenge/:challengeId/admin" component={AdminChallenge} />
      <Route path="/challenge/:challengeId/submission" component={SubmitAttempt} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/user/:userId" component={UserProfile} />
  </div>
);
