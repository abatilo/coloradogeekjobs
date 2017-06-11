import moment from 'moment';
import React, { Component } from 'react';
import './Job.css';

function Job(props) {
  return (
    <div className="Job">
      <div className="Job-title">{props.title} - Posted {moment(props.date).fromNow()}</div>
      <div className="Job-subtitle">{props.company}</div>
    </div>
  );
}

export default Job;
