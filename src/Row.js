import moment from 'moment';
import React, { Component } from 'react';
import './Row.css';

function Row(props) {
  return (
    <div className="Row">
      <div className="Row-title">{props.title} - Posted {moment(props.date).fromNow()}</div>
      <div className="Row-subtitle">{props.company}</div>
    </div>
  );
}

export default Row;
