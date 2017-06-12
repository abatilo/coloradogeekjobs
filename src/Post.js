import 'whatwg-fetch';
import React, { Component } from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Denver',
      company: 'Josh.ai',
      description: 'Build device drivers',
      email: 'jobs@jstar.ai',
      how: 'E-mail jobs@jstar.ai',
      remote: false,
      title: 'Software Engineer',
      url: 'https://www.josh.ai'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    fetch(`${this.props.post}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => {
      console.log(res);
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          City: <textarea value={this.state.city} onChange={() => this.setState({ city })}/>
        </label> <br/>
        <label>
          Company: <input type='text' value={this.state.company} onChange={() => this.setState({ company })}/>
        </label> <br/>
        <label>
          Description: <textarea value={this.state.description} onChange={() => this.setState({ description })}/>
        </label> <br/>
        <label>
          E-mail: <input type='text' value={this.state.email} onChange={() => this.setState({ email })}/>
        </label> <br/>
        <label>
          How to apply: <textarea value={this.state.how} onChange={() => this.setState({ how })}/>
        </label> <br/>
        <label>
          Remote: <input type='checkbox' value={this.state.remote} onChange={() => this.setState({ remote })}/>
        </label> <br/>
        <label>
          Title: <textarea value={this.state.title} onChange={() => this.setState({ title })}/>
        </label> <br/>
        <label>
          URL: <textarea value={this.state.url} onChange={() => this.setState({ url })}/>
        </label> <br/>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Post;
