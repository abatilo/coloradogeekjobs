import './Post.css';
import 'whatwg-fetch';
import React, { Component } from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      company: '',
      description: '',
      email: '',
      how: '',
      title: '',
      url: '',
      submit: ''
    };
    // Bind all the handlers
    this.handleCity = this.handleCity.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleHow = this.handleHow.bind(this);
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

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleURL(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    if (!this.state.city ||
        !this.state.company ||
        !this.state.description ||
        !this.state.email ||
        !this.state.how ||
        !this.state.title ||
        !this.state.url) {
      event.preventDefault();
      this.setState({ problem: 'A field is missing'});
      return;
    }

    console.log(this.state);
    fetch(`${this.props.post}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: this.state.city,
        company: this.state.company,
        description: this.state.description,
        email: this.state.email,
        how: this.state.how,
        title: this.state.title,
        url: this.state.url
      })
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
      } else {
        console.log('Missing keys');
        this.setState({ problem: 'This job could not be posted because of missing data' });
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for='city'>City</label>
          <textarea id='city' name='city' placeholder='Denver' rows='1' value={this.state.city} onChange={this.handleCity}/>

          <label for="company">Company</label>
          <textarea id='company' name='company' placeholder='YourCompany LLC' rows='1' value={this.state.company} onChange={this.handleCompany}/>

          <label for='description'>Description</label>
          <textarea id='description' name='description' placeholder='Write code for...' rows='12' value={this.state.description} onChange={this.handleDescription}/>

          <label for='email'>Email (Used only by me if there's a problem)</label>
          <textarea id='email' name='email' placeholder='you@yourwebsite.com' rows='1' value={this.state.email} onChange={this.handleEmail}/>

          <label for='how'>How</label>
          <textarea id='how' name='how' placeholder='Send an email to...' rows='8' value={this.state.how} onChange={this.handleHow}/>

          <label for='title'>Title</label>
          <textarea id='title' name='title' placeholder='Software Engineer' rows='1' value={this.state.title} onChange={this.handleTitle}/>

          <label for='url'>URL</label>
          <textarea id='url' name='url' placeholder='http://' rows='1' value={this.state.url} onChange={this.handleURL}/>

          <input type='submit' value='Submit' />
        </form>
        <label style={{color: 'red'}}>{this.state.problem}</label>
      </div>
    );
  }
}

export default Post;
