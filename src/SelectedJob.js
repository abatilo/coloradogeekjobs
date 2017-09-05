import './SelectedJob.css';
import React, { Component } from 'react';

function SelectedJob(props) {
  return (
    <div className='SelectedJob'>
      <p><b>Job description:</b><br/>{props.description}</p>
      <p><b>How to apply:</b><br/>{props.how}</p>
    </div>
  );
}

export default SelectedJob;
