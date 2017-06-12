import 'whatwg-fetch';
import React, { Component } from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Bind all the handlers
    this.handleCity = this.handleCity.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleHow = this.handleHow.bind(this);
    this.handleRemote = this.handleRemote.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleURL = this.handleURL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCity(event) {
    this.setState({city: event.target.value});
  }

  handleCompany(event) {
    this.setState({company: event.target.value});
  }

  handleDescription(event) {
    this.setState({description: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleHow(event) {
    this.setState({how: event.target.value});
  }

  handleRemote(event) {
    this.setState({remote: event.target.value});
  }

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleURL(event) {
    this.setState({url: event.target.value});
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
      if (res.status === 200) {
        console.log(res);
      } else {
        console.log('Missing keys');
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          City: <textarea value={this.state.city} onChange={this.handleCity}/>
        </label> <br/>
        <label>
          Company: <input type='text' value={this.state.company} onChange={this.handleCompany}/>
        </label> <br/>
        <label>
          Description: <textarea value={this.state.description} onChange={this.handleDescription}/>
        </label> <br/>
        <label>
          E-mail: <input type='text' value={this.state.email} onChange={this.handleEmail}/>
        </label> <br/>
        <label>
          How to apply: <textarea value={this.state.how} onChange={this.handleHow}/>
        </label> <br/>
        <label>
          Remote: <input type='checkbox' value={this.state.remote} onChange={this.handleRemote}/>
        </label> <br/>
        <label>
          Title: <textarea value={this.state.title} onChange={this.handleTitle}/>
        </label> <br/>
        <label>
          URL: <textarea value={this.state.url} onChange={this.handleURL}/>
        </label> <br/>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Post;
