import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import styles from './Post.module.scss';

class Post extends Component {

  noop = () => {
    // No operation
  }

  internalOnClick = () => {
    const { id, onClick } = this.props;
    onClick(id);
  }

  render() {
    const { jobTitle, companyName, date } = this.props;
    return (
      <div
        className={styles.post}
        role="button"
        tabIndex={0}
        onClick={this.internalOnClick}
        onKeyPress={this.noop}
      >
        <span className={styles.company}>{companyName}</span>
        <span className={styles.title}>{jobTitle}</span>
        <span className={styles.date}>
          <Moment format="MMM DD">
            {date}
          </Moment>
        </span>
      </div>
    )
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Post;
