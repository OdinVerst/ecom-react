import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './index.css';
import { HomePage } from './pages/homepage/Homepage';
import { Hats } from './pages/hats/Hats';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={Hats} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);