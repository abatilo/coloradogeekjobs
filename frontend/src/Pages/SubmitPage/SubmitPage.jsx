import React, { Component } from 'react';
import SubmissionInput from '../../Components/SubmissionInput/SubmissionInput';
import Button from '../../Components/Button/Button';
import styles from './SubmitPage.module.scss';

const radioValues = {
  FULL: 'full',
  CONTRACT: 'contract',
  INTERN: 'intern'
};

class SubmitPage extends Component {
  state = {
    jobTitle: '',
    jobType: 'full',
    jobDescription: '',
    companyDescription: '',
    how: '',
    email: '',
  };

  changeJobTitle = ({target: { value: jobTitle }}) => {
    this.setState({ jobTitle });
  }

  changeJobType = ({currentTarget: { value: jobType }}) => {
    this.setState({ jobType });
  };

  changeJobDescription = ({target: { value: jobDescription }}) => {
    this.setState({ jobDescription });
  }

  changeCompanyDescription = ({target: { value: companyDescription }}) => {
    this.setState({ companyDescription });
  }

  changeHow = ({target: { value: how }}) => {
    this.setState({ how });
  }

  changeEmail = ({target: { value: email }}) => {
    this.setState({ email });
  }

  submit = () =>{
    const {
      jobTitle,
      jobType,
      jobDescription,
      companyDescription,
      how,
      email,
    } = this.state;
    console.log(jobTitle);
    console.log(jobType);
    console.log(jobDescription);
    console.log(companyDescription);
    console.log(how);
    console.log(email);
  }

  render() {
    const {
      jobTitle,
      jobType,
      jobDescription,
      companyDescription,
      how,
      email,
    } = this.state;
    const {
      FULL,
      CONTRACT,
      INTERN
    } = radioValues;

    return (
      <div className={styles.submit}>
        <SubmissionInput inputLabel="Job title" optionsLabel="Example: Software Engineer, Senior Software Engineer, etc">
          <input type="text" onChange={this.changeJobTitle} value={jobTitle}/>
        </SubmissionInput>

        <SubmissionInput inputLabel="Job Type" optionsLabel="">
          <input checked={jobType === FULL} type="radio" name="jobType" value={FULL} onChange={this.changeJobType}/>Full-Time<br />
          <input checked={jobType === CONTRACT}type="radio" name="jobType" value={CONTRACT} onChange={this.changeJobType}/>Contract<br />
          <input checked={jobType === INTERN}type="radio" name="jobType" value={INTERN} onChange={this.changeJobType}/>Internship
        </SubmissionInput>

        <SubmissionInput inputLabel="Job Description" optionsLabel="What does this job require?">
          <textarea rows="8" cols="70" onChange={this.changeJobDescription} value={jobDescription} />
        </SubmissionInput>

        <SubmissionInput inputLabel="Company Description" optionsLabel="Example: We build drones on a blockchain">
          <textarea rows="5" cols="70" onChange={this.changeCompanyDescription} value={companyDescription} />
        </SubmissionInput>

        <SubmissionInput inputLabel="How to apply" optionsLabel="Example: Send a resume to you@yourcompany.com">
          <textarea rows="3" cols="70" onChange={this.changeHow} value={how} />
        </SubmissionInput>

        <SubmissionInput inputLabel="Your email" optionsLabel="Not shared. We only use it to contact you if there's a problem.">
          <input type="text" onChange={this.changeEmail} value={email} />
        </SubmissionInput>

        <div className={styles.button}>
          <Button onClick={this.submit}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
};

export default SubmitPage;
