import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="Header">
      <a href='https://www.twitter.com/aaronbatilo'>Follow me</a>
      <p>This site is <b>heavily</b> inspired by <a href="https://www.oldgeekjobs.com">oldgeekjobs.com</a></p>
      <Link to='/post'>Post a job. $20 for 30 days</Link>
    </div>
  );
}

export default Header;
