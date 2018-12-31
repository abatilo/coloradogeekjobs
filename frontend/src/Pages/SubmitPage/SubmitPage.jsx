import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import XssFilter from 'showdown-xss-filter';
import SubmissionInput from '../../Components/SubmissionInput/SubmissionInput';
import Button from '../../Components/Button/Button';
import 'react-mde/lib/styles/css/react-mde-all.css';
import 'draft-js/dist/Draft.css';
import styles from './SubmitPage.module.scss';

const radioValues = {
  FULL: 'full',
  CONTRACT: 'contract',
  INTERN: 'intern'
};

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.converter = new Showdown.Converter({
      extensions: [XssFilter]
    });
  }

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
          <ReactMde
            className={styles.mde}
            onChange={changeJobDescription}
            value={jobDescription}
            generateMarkdownPreview={markdown => Promise.resolve(this.converter.makeHtml(markdown))}
          />
        </SubmissionInput>

        <SubmissionInput inputLabel="Company Name" optionsLabel="">
          <input type="text" onChange={changeCompanyName} value={companyName}/>
        </SubmissionInput>

        <SubmissionInput inputLabel="Company Website" optionsLabel="">
          <input type="text" onChange={changeCompanyWebsite} value={companyWebsite}/>
        </SubmissionInput>

        <SubmissionInput inputLabel="Company Description" optionsLabel="Example: We build drones on a blockchain">
          <ReactMde
            className={styles.mde}
            onChange={changeCompanyDescription}
            value={companyDescription}
            generateMarkdownPreview={markdown => Promise.resolve(this.converter.makeHtml(markdown))}
          />
        </SubmissionInput>

        <SubmissionInput inputLabel="How to apply" optionsLabel="Example: Send a resume to you@yourcompany.com">
          <ReactMde
            className={styles.mde}
            onChange={changeHow}
            value={how}
            generateMarkdownPreview={markdown => Promise.resolve(this.converter.makeHtml(markdown))}
          />
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
