import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Banner from '../../Components/Banner/Banner';
import PostCollection from '../../Components/PostCollection/PostCollection';
import Post from '../../Components/Post/Post';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

const query = gql`
{
  allJobs {
    id
    date
    jobTitle
    companyName
  }
}
`;

class HomePage extends Component {

  onClick = (id) => {
    const { history } = this.props;
    history.push(`/posts/${id}`);
  }

  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <div />;
          if (error || !data) {
            return <ErrorMessage />
          }

          const { allJobs: jobs } = data;
          if (jobs.length > 0) {
            return (
              <div>
              <Banner />
              <PostCollection>
              {
                jobs.map(job => (
                  <Post {...job} key={job.id} onClick={this.onClick} />
                ))
              }
              </PostCollection>
              </div>
            )
          }
          // TODO Style this better
          return (
            <div>
            <Banner />
            <div style={{ textAlign: 'center' }}>
            Nothing has been posted recently
            </div>
            </div>
          )

        }}
      </Query>
    );
  }
}

HomePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default withRouter(HomePage);
