import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const jobs = [
    'Software Engineer',
    'Mobile Engineer',
    'Backend Engineer',
    'Frontend Engineer',
  ];
  const div = document.createElement('div');
  ReactDOM.render(<App jobs={jobs}/>, div);
});
