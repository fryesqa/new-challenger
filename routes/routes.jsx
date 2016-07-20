import { Route } from 'react-router';
import { App, Main, Login, AdminChallenge, ChallengeCreateForm, UserProfile, ChallengeInfoUser, ChallengeSubmitAttempt } from '../client/src/components';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/challenge/create" component={ChallengeCreateForm} />
    <Route path="/challenge/:challengeId" component={ChallengeInfoUser} />
    <Route path="/challenge/:challengeId/admin" component={AdminChallenge} />
    <Route path="/challenge/:challengeId/submission" component={ChallengeSubmitAttempt} />
  </Route>
  <Route path="/login" component={Login} />
  <Route path="/user/:userId" component={UserProfile} />
);
