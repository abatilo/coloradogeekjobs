import React, { Component } from 'react';
import './App.css';
import Row from './Row.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
}

export default App;
