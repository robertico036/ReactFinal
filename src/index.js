import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import Day1 from './components/Day1';
import DayI from './components/DayI';
import Body from './components/Body';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Day1" component={Day1} />
      <Route path="/DayI" component={DayI} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));

