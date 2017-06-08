import React, { Component } from 'react';

function Header(props) {
  return (
    <div className="Header">
      <p>This site is <b>heavily</b> inspired by <a href="oldgeekjobs.com">oldgeekjobs.com</a></p>
      <p><a href="post.html">Post a job for $5 for 2 weeks</a></p>
    </div>
  );
}

export default Header;
