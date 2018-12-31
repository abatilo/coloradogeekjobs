import React  from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import styles from './ViewPage.module.scss';

const ViewPage = ({
  date, jobTitle, jobType, jobDescription, companyName, companyWebsite, companyDescription, how
}) => (
  <div className={styles.view}>
    <div className={styles.jobTitle}>
      {jobTitle}
      <div className={styles.date}>
        Posted on <Moment format="MMM DD">{date}</Moment>
      </div>
      <div className={styles.companyName}>
        <span>
          {companyName} (<a href={companyWebsite}>{companyWebsite}</a>)
        </span>
      </div>
    </div>

    <div className={styles.jobType}>
      {jobType}
    </div>

    <div className={styles.jobDescription}>
      <ReactMarkdown source={jobDescription} />
    </div>

    <div className={styles.companyDescription}>
      <h3>About the company:</h3>
      <ReactMarkdown source={companyDescription} />
    </div>

    <div className={styles.how}>
      <h3>How to apply:</h3>
      <ReactMarkdown source={how} />
    </div>

  </div>
);

ViewPage.propTypes = {
  date: PropTypes.number.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyWebsite: PropTypes.string.isRequired,
  companyDescription: PropTypes.string.isRequired,
  how: PropTypes.string.isRequired,
}

export default ViewPage;
