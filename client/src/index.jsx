import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from '../../routes/routes.js';

ReactDOM.render((
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
