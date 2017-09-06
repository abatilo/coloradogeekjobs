import 'whatwg-fetch';
import Header from './Header.js';
import Job from './Job.js';
import React, { Component } from 'react';
import SelectedJob from './SelectedJob.js';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    // Set state to be empty
    this.state = {
      jobs: [],
      selectedJobId: -1,
      selectedJobDescription: '',
      selectedJobHow: '',
      selectedJobTitle: '',
      selectedJobUrl: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Make an http request to get data to populate
    fetch(`${this.props.get}`)
      .then(resp => resp.json())
      .then(jobs => this.setState({ jobs })); }

  handleClick(id) {
    /*
     * This for loop might be slow. The question is if we'll
     * ever get enough job postings that it will actually be slow
     */
    for (let i = 0; i < this.state.jobs.length; ++i) {
      let job = this.state.jobs[i];
      if (job.id === id) {
        this.setState({
          selectedJobId: job.id,
          selectedJobDescription: job.description,
          selectedJobHow: job.how,
          selectedJobTitle: job.title,
          selectedJobUrl: job.url
        });
      }
    }
  }

  render() {
    return (
      <div id='Home-div'>
        <Header />
        <div id='Job-list'>
          { this.state.jobs.length > 0 ?
            this.state.jobs.map((job) =>
              <Job
                click={this.handleClick}
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                city={job.city}
                date={job.date}
                selectedJob={this.state.selectedJobId}
                className={'Job' + (this.state.selectedJobId === job.id ? ' Job-selected' : '')}
              />)
           : 'There hasn\'t been a new job posted in the last 30 days.' }
        </div>
        { this.state.selectedJobId !== -1 ?
        <SelectedJob className='.SelectedJob'
          description={this.state.selectedJobDescription}
          how={this.state.selectedJobHow}
        /> : null }
      </div>
    );
  }
}

export default Home;
