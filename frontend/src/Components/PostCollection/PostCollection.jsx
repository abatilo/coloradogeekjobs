import React from 'react';
import PropTypes from 'prop-types';

const PostCollection = ({children}) => (
  <div>
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
