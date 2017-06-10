import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';

it('renders Row without crashing', () => {
  const row = document.createElement('row');
  ReactDOM.render(<Row />, row);
});
