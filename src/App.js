import React, { Component } from 'react';
import './App.css';
import Row from './Row.js'
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    fetch(`http://${this.props.base}/jobs`)
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        console.log(json.map(obj => obj.title));
        const jobs = json.map(obj => obj.title);
        this.setState({ jobs });
      });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.jobs.map((t) => <Row title={t}/>)
        }
      </div>
    );
  }
}

export default App;
