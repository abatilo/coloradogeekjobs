import './SelectedJob.css';
import React, { Component } from 'react';

function SelectedJob(props) {
  return (
    <div className='SelectedJob'>
      <p><b>Job title:</b><br/>{props.title}</p>
      <p><b>City:</b><br/>{props.city}</p>
      <p><b>Company:</b><br/>{props.company}</p>
      <p><b>Website:</b><br/>{props.url}</p>
      <p><b>Job description:</b><br/>{props.description}</p>
      <p><b>How to apply:</b><br/>{props.how}</p>
    </div>
  );
}

export default SelectedJob;
