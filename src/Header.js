import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <div id='postLinkDiv'>
      <Link to='/post' className='postLink'>Post a job. <b>Free</b> for 30 days</Link>
    </div>
  );
}

export default Header;
