import 'whatwg-fetch';
import React, { Component } from 'react';
import Header from './Header.js';
import Row from './Row.js';

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
          <Row key={job._id} title={job.title} company={job.company} date={job.date}/>)
      }
      </div>
    );
  }
}

export default Home;
