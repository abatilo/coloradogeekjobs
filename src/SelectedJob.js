import './SelectedJob.css';
import React, { Component } from 'react';
import SmartText from 'react-smart-text'

// This is what we're hunting in the text.
const emailRegex = /\w+@.+?\.(com)/g

// This is what we want to replace matches with.
const Email = (props) =>
  <a href={`mailto:${props.text}`}>{props.text}</a>

function SelectedJob(props) {
  return (
    <div className='SelectedJob'>
      <label for='description' id='descriptionLabel'>Description</label>
      <SmartText id='description' name='description' regex={emailRegex} component={Email}>
        {props.description}
      </SmartText>
      <br/>
      <label for='how' id='howLabel'>How to apply</label>
      <SmartText id='how' name='how' regex={emailRegex} component={Email}>
        {props.how}
      </SmartText>
    </div>
  );
}

export default SelectedJob;
