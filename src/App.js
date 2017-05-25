import React, { Component } from 'react';
import './App.css';
import Row from './Row.js'

class App extends Component {
  rows() {
    return <Row title="Software" />
  }

  render() {
    const listItems = this.props.jobs.map((t) => <Row title={t}/>);
    return (
      <div className="App">
        {listItems}
      </div>
    );
  }
}

export default App;
