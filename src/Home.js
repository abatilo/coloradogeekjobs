import 'whatwg-fetch';
import React, { Component } from 'react';
import Header from './Header.js';
import Job from './Job.js';

class Home extends Component {
  constructor(props) {
    super(props);
    // Set state to be empty
    this.state = {
      jobs: [],
      selectedJob: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Make an http request to get data to populate
    fetch(`${this.props.get}`)
      .then(resp => resp.json())
      .then(jobs => this.setState({ jobs }));
  }

  handleClick(id) {
    for (let i = 0; i < this.state.jobs.length; ++i) {
      let job = this.state.jobs[i];
      console.log(job);
      if (job.id === id) {
        this.setState({ selectedJob: job.title });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.jobs.map((job) =>
            <Job click={this.handleClick} key={job.id} id={job.id} title={job.title} company={job.company} date={job.date}/>)
        }
        <div>
          {this.state.selectedJob}
        </div>
      </div>
    );
  }
}

export default Home;
