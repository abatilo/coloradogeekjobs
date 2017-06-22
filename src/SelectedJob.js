import './SelectedJob.css';
import React, { Component } from 'react';

function SelectedJob(props) {
  return (
    <div className='SelectedJob'>
      <p>{props.city}</p>
      <p>{props.company}</p>
      <p>{props.description}</p>
      <p>{props.email}</p>
      <p>{props.how}</p>
      <p>{props.remote}</p>
      <p>{props.title}</p>
      <p>{props.url}</p>
    </div>
  );
}

export default SelectedJob;
