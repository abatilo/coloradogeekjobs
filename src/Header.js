import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="Header">
      <p>This site is <b>heavily</b> inspired by <a href="oldgeekjobs.com">oldgeekjobs.com</a></p>
      <Link to='/post'>Post a job. $10 for 2 weeks.</Link>
    </div>
  );
}

export default Header;
