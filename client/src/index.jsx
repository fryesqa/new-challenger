import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AppRedux, FullNav, Login, AdminChallenge, ChallengeCreateForm, UserProfile, PlayerView, SubmitAttempt } from './components/Components.js';

import { Provider } from 'react-redux';
import store, { history } from './store';

ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path="/" component={AppRedux}>
          <IndexRoute component={Container} />
          <Route path="challenges" component={ChallengeContainer} />
            <IndexRoute component={FullNav} />
            <Route path="create" component={ChallengeCreateForm} />
            <Route path=":challengeId" component={PlayerView} />
            <Route path=":challengeId/admin" component={AdminChallenge} />
            <Route path=":challengeId/submission" component={SubmitAttempt} />
          </Route>
          <Route path="login" component={Login} />
          <Route path="users/:userId" />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
  ), document.getElementById('app')
);
