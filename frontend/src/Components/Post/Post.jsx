import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.module.scss';

const Post = ({title, company, date}) => (
  <div className={styles.post}>
    <span className={styles.company}>{company}</span>
    <span className={styles.title}>{title}</span>
    <span className={styles.date}>{date}</span>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Post;
