import './App.css';
import 'whatwg-fetch';
import Header from './Header.js';
import React, { Component } from 'react';
import Row from './Row.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (<div>Testing</div>);

class App extends Component {
  constructor(props) {
    super(props);
    // Set state to be empty
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    // Make an http request to get data to populate
    fetch(`${this.props.get}`)
      .then(resp => resp.json())
      .then(jobs => this.setState({ jobs }));
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/'>
            <div className="App">
              <Header />
              {
                this.state.jobs.map((job) =>
                  <Row key={job._id} title={job.title} company={job.company} date={job.date}/>)
              }
            </div>
          </Route>
          <Route path='/post'>
            <p>Post route</p>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
