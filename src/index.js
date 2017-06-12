import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const GET_URL = runtimeEnv().REACT_APP_GET_URL || 'http://localhost:8080/jobs';
const POST_URL = runtimeEnv().REACT_APP_POST_URL || 'http://localhost:8080/post-job';

ReactDOM.render(
  <App get={GET_URL} post={POST_URL}/>,
  document.getElementById('root')
);
