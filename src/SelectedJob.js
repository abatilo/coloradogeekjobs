import './SelectedJob.css';
import React, { Component } from 'react';
import Text from 'react-format-text';

function SelectedJob(props) {
  return (
    <div className='SelectedJob'>
      <label htmlFor='description' id='descriptionLabel'>Description</label><br/>
      {console.log(props.description)}
      <Text id='description' name='description'>
        {props.description}
      </Text>
      <br/><br/>
      <label htmlFor='how' id='howLabel'>How to apply</label><br/>
      <Text id='how' name='how'>
        {props.how}
      </Text>
    </div>
  );
}

export default SelectedJob;
