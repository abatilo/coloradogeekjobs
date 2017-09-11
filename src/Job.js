import './Job.css';
import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function Job(props) {
  return (
    <div onClick={() => props.click(props.id)} className={props.className}>
      <div id="jobTitle">{props.title} at {props.company}</div>
      <div id="jobSubtitle">{props.city} - Posted {moment(props.date).fromNow()}</div>
    </div>
  );
}

export default Job;
