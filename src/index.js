import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const BASE_URL = process.env.BASE_URL || 'localhost:8080';

ReactDOM.render(
  <App base={BASE_URL}/>,
  document.getElementById('root')
);
