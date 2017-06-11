import React from 'react';
import ReactDOM from 'react-dom';
import Job from './Job';

it('renders Job without crashing', () => {
  const row = document.createElement('row');
  ReactDOM.render(<Job />, row);
});
