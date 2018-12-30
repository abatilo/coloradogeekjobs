import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostCollection.module.scss';

const PostCollection = ({children}) => (
  <div className={styles.postCollection}>
    {children}
  </div>
)

PostCollection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PostCollection;
