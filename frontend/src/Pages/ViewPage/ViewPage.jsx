import React  from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import styles from './ViewPage.module.scss';

const query = gql`
query ($jobID: Int!) {
  job(id: $jobID) {
    date
    jobTitle
    jobType
    jobDescription
    companyName
    companyWebsite
    companyDescription
    how
  }
}
`;

const ViewPage = ({ jobID }) => (
  <Query query={query} variables={{ jobID }}>
    {({ loading, error, data }) => {
      if (loading) return <div />;
      if (error || !data) {
        return <ErrorMessage />;
      }

      const { job } = data;
      const {
        date,
        jobTitle,
        companyName,
        companyWebsite,
        jobType,
        jobDescription,
        companyDescription,
        how,
      } = job;

      return (
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
    }}
  </Query>
);

ViewPage.propTypes = {
  jobID: PropTypes.number.isRequired,
};

export default ViewPage;
