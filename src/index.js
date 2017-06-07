import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const GET_URL = runtimeEnv().REACT_APP_GET_URL || 'http://localhost:8080/jobs';

ReactDOM.render(
  <App get={GET_URL}/>,
  document.getElementById('root')
);
