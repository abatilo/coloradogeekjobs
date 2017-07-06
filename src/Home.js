import 'whatwg-fetch';
import Header from './Header.js';
import Job from './Job.js';
import React, { Component } from 'react';
import SelectedJob from './SelectedJob.js';

class Home extends Component {
  constructor(props) {
    super(props);
    // Set state to be empty
    this.state = {
      jobs: [],
      selectedJobCity: '',
      selectedJobCompany: '',
      selectedJobDescription: '',
      selectedJobEmail: '',
      selectedJobHow: '',
      selectedJobRemote: '',
      selectedJobTitle: '',
      selectedJobUrl: ''
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
    /*
     * This for loop might be slow. The question is if we'll
     * ever get enough job postings that it will actually be slow
     */
    for (let i = 0; i < this.state.jobs.length; ++i) {
      let job = this.state.jobs[i];
      if (job.id === id) {
        this.setState({
          selectedJobCity: job.city,
          selectedJobCompany: job.company,
          selectedJobDescription: job.description,
          selectedJobEmail: job.email,
          selectedJobHow: job.how,
          selectedJobRemote: job.remote,
          selectedJobTitle: job.title,
          selectedJobUrl: job.url
        });
      }
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <table className='App-table'>
          <tbody>
            <tr>
            <td className='App-table-column'>
            <div className='.Job-list'>
              {
                this.state.jobs.map((job) =>
                  <Job click={this.handleClick} key={job.id} id={job.id} title={job.title} company={job.company} date={job.date}/>)
              }
            </div>
            </td>
            <td className='App-table-column'>
            <SelectedJob className='.SelectedJob'
              city={this.state.selectedJobCity}
              company={this.state.selectedJobCompany}
              description={this.state.selectedJobDescription}
              email={this.state.selectedJobEmail}
              how={this.state.selectedJobHow}
              remote={this.state.selectedJobRemote}
              title={this.state.selectedJobTitle}
              url={this.state.selectedJobUrl}
            />
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
