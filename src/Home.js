import 'whatwg-fetch';
import React, { Component } from 'react';
import Header from './Header.js';
import Job from './Job.js';

class Home extends Component {
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
      <Header />
      {
        this.state.jobs.map((job) =>
          <Job key={job.id} id={job.id} title={job.title} company={job.company} date={job.date}/>)
      }
      </div>
    );
  }
}

export default Home;
