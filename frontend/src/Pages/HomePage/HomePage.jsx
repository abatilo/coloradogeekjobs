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
    const {jobs} = this.props;
    return (
      <div>
        <Banner />
        <PostCollection>
          {
            jobs.map(job => (
                <Post {...job} onClick={this.onClick} />
            ))
          }
        </PostCollection>
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
    date: PropTypes.number,
  })).isRequired
}

export default withRouter(HomePage);
