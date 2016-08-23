import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//import 404 from './pages/404';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Music from './pages/Music';
import Tour from './pages/Tour';
import Videos from './pages/Videos';
import Layout from './Layout';

var app = document.getElementById('app');
ReactDOM.render(
  <Router history={ hashHistory }>
      <Route path="/" component={Layout}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="contact" component={Contact}></Route>
          <Route path="music" component={Music}></Route>
          <Route path="tour" component={Tour}></Route>
          <Route path="videos" component={Videos}></Route>
      </Route>
  </Router>
  ,app);
