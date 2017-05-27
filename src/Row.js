import React, { Component } from 'react';
import './Row.css'

function Row(props) {
  return (
    <div className="Row">
      <div className="Row-title">{props.title}</div>
      <div className="Row-subtitle">Comcast</div>
    </div>
  );
}

export default Row;
