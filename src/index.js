import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const BASE_URL = runtimeEnv().REACT_APP_BASE_URL || 'http://localhost:8080/jobs';

ReactDOM.render(
  <App base={BASE_URL}/>,
  document.getElementById('root')
);
