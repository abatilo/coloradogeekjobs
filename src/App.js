import './App.css';
import React, { Component } from 'react';
import Post from './Post.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div>
        <Route exact path='/' render={() => <Home get={props.get} />}/>
        <Route path='/post' component={Post}/>
      </div>
    </Router>
  );
}

export default App;
