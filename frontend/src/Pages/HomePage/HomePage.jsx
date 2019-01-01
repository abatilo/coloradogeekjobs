import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import Banner from '../../Components/Banner/Banner';
import PostCollection from '../../Components/PostCollection/PostCollection';
import Post from '../../Components/Post/Post';

class HomePage extends Component {

  onClick = (id) => {
    const { history } = this.props;
    history.push(`/posts/${id}`);
  }

  render() {
    const { jobs } = this.props;
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
  }
}

HomePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  jobs: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    id: PropTypes.number,
    jobTitle: PropTypes.string,
    companyName: PropTypes.string,
    companyWebsite: PropTypes.string,
    companyDescription: PropTypes.string,
    how: PropTypes.string,
    date: PropTypes.string,
  })).isRequired
}

export default withRouter(HomePage);
