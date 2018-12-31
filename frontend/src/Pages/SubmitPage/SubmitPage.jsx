import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import SubmissionInput from '../../Components/SubmissionInput/SubmissionInput';
import Button from '../../Components/Button/Button';
import styles from './SubmitPage.module.scss';

const radioValues = {
  FULL: 'full',
  CONTRACT: 'contract',
  INTERN: 'intern'
};

class SubmitPage extends Component {
  submit = () =>{
    const { history, changeAllowPreview } = this.props;
    changeAllowPreview();
    history.push('/preview');
  }

  render() {
    const {
      jobTitle,
      jobType,
      jobDescription,
      companyName,
      companyWebsite,
      companyDescription,
      how,
      email,
      changeJobTitle,
      changeJobType,
      changeJobDescription,
      changeCompanyName,
      changeCompanyWebsite,
      changeCompanyDescription,
      changeHow,
      changeEmail,
    } = this.props;
    const {
      FULL,
      CONTRACT,
      INTERN
    } = radioValues;

    return (
      <div className={styles.submit}>
        <SubmissionInput inputLabel="Job title" optionsLabel="Example: Software Engineer, Senior Software Engineer, etc">
          <input type="text" onChange={changeJobTitle} value={jobTitle}/>
        </SubmissionInput>

        <SubmissionInput inputLabel="Job Type" optionsLabel="">
          <input checked={jobType === FULL} type="radio" name="jobType" value={FULL} onChange={changeJobType}/>Full-Time<br />
          <input checked={jobType === CONTRACT}type="radio" name="jobType" value={CONTRACT} onChange={changeJobType}/>Contract<br />
          <input checked={jobType === INTERN}type="radio" name="jobType" value={INTERN} onChange={changeJobType}/>Internship
        </SubmissionInput>

        <SubmissionInput inputLabel="Job Description" optionsLabel="What does this job require?">
          <textarea rows="8" cols="70" onChange={changeJobDescription} value={jobDescription} />
        </SubmissionInput>

        <SubmissionInput inputLabel="Company Name" optionsLabel="">
          <input type="text" onChange={changeCompanyName} value={companyName}/>
        </SubmissionInput>

        <SubmissionInput inputLabel="Company Website" optionsLabel="">
          <input type="text" onChange={changeCompanyWebsite} value={companyWebsite}/>
        </SubmissionInput>

        <SubmissionInput inputLabel="Company Description" optionsLabel="Example: We build drones on a blockchain">
          <textarea rows="5" cols="70" onChange={changeCompanyDescription} value={companyDescription} />
        </SubmissionInput>

        <SubmissionInput inputLabel="How to apply" optionsLabel="Example: Send a resume to you@yourcompany.com">
          <textarea rows="3" cols="70" onChange={changeHow} value={how} />
        </SubmissionInput>

        <SubmissionInput inputLabel="Your email" optionsLabel="Not shared. We only use it to contact you if there's a problem.">
          <input type="text" onChange={changeEmail} value={email} />
        </SubmissionInput>

        <div className={styles.button}>
          <Button onClick={this.submit}>
            Preview
          </Button>
        </div>
      </div>
    );
  }
};

SubmitPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyWebsite: PropTypes.string.isRequired,
  companyDescription: PropTypes.string.isRequired,
  how: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  changeJobTitle: PropTypes.func.isRequired,
  changeJobType: PropTypes.func.isRequired,
  changeJobDescription: PropTypes.func.isRequired,
  changeCompanyName: PropTypes.func.isRequired,
  changeCompanyWebsite: PropTypes.func.isRequired,
  changeCompanyDescription: PropTypes.func.isRequired,
  changeHow: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changeAllowPreview: PropTypes.func.isRequired,
}

export default withRouter(SubmitPage);
