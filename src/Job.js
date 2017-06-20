import './Job.css';
import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function Job(props) {
  return (
    <Link to={`/job/${props.id}`} className="Job">
      <div className="Job-title">{props.title} - Posted {moment(props.date).fromNow()}</div>
      <div className="Job-subtitle">{props.company}</div>
    </Link>
  );
}

export default Job;
