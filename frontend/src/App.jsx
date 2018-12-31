import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import asyncComponent from './Components/AsyncComponent';

const AsyncHome = asyncComponent(() => import('./Pages/HomePage/HomePage'));
const AsyncSubmit = asyncComponent(() => import('./Pages/SubmitPage/SubmitPage'));

const App = () => (
  <div className={styles.app}>
    <Router>
      <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/submit" exact component={AsyncSubmit} />
      </Switch>
    </Router>
  </div>
)

export default App;
