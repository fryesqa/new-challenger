import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AppRedux, Main, Login, AdminChallenge, ChallengeCreateForm, UserProfile, PlayerView, SubmitAttempt } from './components/Components.js';

import { Provider } from 'react-redux';
import store, { history } from './store';

ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path="/" component={AppRedux}>
          <IndexRoute component={Main} />
          <Route path="challenge/create" component={ChallengeCreateForm} />
          <Route path="challenge/:challengeId" component={PlayerView} />
          <Route path="challenge/:challengeId/admin" component={AdminChallenge} />
          <Route path="challenge/:challengeId/submission" component={SubmitAttempt} />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/user/:userId" component={UserProfile} />
      </Router>
    </MuiThemeProvider>
  </Provider>
  ), document.getElementById('app')
);
