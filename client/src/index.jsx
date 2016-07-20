import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from '../../routes/routes.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render((
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
  ), document.getElementById('app')
);
