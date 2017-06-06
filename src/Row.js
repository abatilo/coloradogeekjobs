import React, { Component } from 'react';
import './Row.css'

function Row(props) {
  return (
    <div className="Row">
      <div className="Row-title">{props.title}</div>
      <div className="Row-subtitle">{props.company}</div>
    </div>
  );
}

export default Row;
