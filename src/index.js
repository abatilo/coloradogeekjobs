import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const jobs = [
  'Software Engineer',
  'Mobile Engineer',
  'Backend Engineer',
];

ReactDOM.render(
  <App jobs={jobs}/>,
  document.getElementById('root')
);
