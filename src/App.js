import './App.css';
import React, { Component } from 'react';
import Detail from './Detail.js';
import Home from './Home.js';
import Post from './Post.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div>
        <Route exact path='/' render={() => <Home get={props.get} />}/>
        <Route path='/post' render={() => <Post post={props.post} />}/>
        <Route path='/job/:id' component={Detail} />
      </div>
    </Router>
  );
}

export default App;
