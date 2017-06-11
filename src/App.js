import './App.css';
import React, { Component } from 'react';
import Post from './Post.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.get);
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/post'>Post</Link></li>
          </ul>
          <hr/>
          <Route path='/' render = {(props) => (<Home get={this.props.get} />)}/>
          <Route path='/post' component={Post}/>
        </div>
      </Router>
    );
  }
}

export default App;
