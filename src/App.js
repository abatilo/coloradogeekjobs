import React, { Component } from 'react';
import './App.css';
import Row from './Row.js'
import 'whatwg-fetch';

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
      <div className="App">
        {
          this.state.jobs.map((job) =>
            <Row key={job._id} title={job.title} company={job.company} date={job.date}/>)
        }
      </div>
    );
  }
}

export default App;
