import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path ="/login" component={Login}/>
      </Switch>
    </Router>
  );
}