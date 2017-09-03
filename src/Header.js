import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <Link to='/post' className='postLink'>Post a job. <b>Free</b> for 30 days</Link>
  );
}

export default Header;
