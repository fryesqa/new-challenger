import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from '../../routes/routes.jsx';

import { Provider } from 'react-redux';
import store, { history } from './store';

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={routes} />    
  </Provider>
  ), document.getElementById('app')
);

      // <Router history={browserHistory} routes={routes} />
