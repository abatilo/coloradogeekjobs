import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ApolloClient, { gql } from 'apollo-boost';
import { withApollo } from 'react-apollo';
import PropTypes from 'prop-types';
import styles from './App.module.scss';
import asyncComponent from './Components/AsyncComponent';

const AsyncHome = asyncComponent(() => import('./Pages/HomePage/HomePage'));
const AsyncSubmit = asyncComponent(() => import('./Pages/SubmitPage/SubmitPage'));
const AsyncPreview = asyncComponent(() => import('./Pages/PreviewPage/PreviewPage'));
const AsyncView = asyncComponent(() => import('./Pages/ViewPage/ViewPage'));

class App extends Component {
  // Consider putting this state into a Redux store.
  // It's not that much state though, so passing it through like this seems
  // fine.
  state = {
    jobTitle: '',
    jobType: 'full',
    jobDescription: '',
    companyName: '',
    companyWebsite: '',
    companyDescription: '',
    how: '',
    email: '',
    allowPreview: true,
  };

  changeJobTitle = ({target: { value: jobTitle }}) => {
    this.setState({ jobTitle });
  }

  changeJobType = ({currentTarget: { value: jobType }}) => {
    this.setState({ jobType });
  };

  changeJobDescription = (value) => {
    this.setState({ jobDescription: value });
  }

  changeCompanyName = ({target: { value: companyName }}) => {
    this.setState({ companyName });
  }

  changeCompanyWebsite = ({target: { value: companyWebsite }}) => {
    this.setState({ companyWebsite });
  }

  changeCompanyDescription = (value) => {
    this.setState({ companyDescription: value });
  }

  changeHow = (value) => {
    this.setState({ how: value });
  }

  changeEmail = ({target: { value: email }}) => {
    this.setState({ email });
  }

  changeAllowPreview = () => {
    this.setState({ allowPreview: true });
  }

  getJobs = async () => {
    const { client } = this.props;
    const { data: { allJobs }}= await client.query({
      query: gql`
      {
        allJobs {
          id
          date
          jobTitle
          companyName
        }
      }
      `
    });

    return [...allJobs];
  }

  render() {
    const { allowPreview } = this.state;
    const submitProps = {
      ...this.state,
      changeJobTitle: this.changeJobTitle,
      changeJobType: this.changeJobType,
      changeJobDescription: this.changeJobDescription,
      changeCompanyName: this.changeCompanyName,
      changeCompanyWebsite: this.changeCompanyWebsite,
      changeCompanyDescription: this.changeCompanyDescription,
      changeHow: this.changeHow,
      changeEmail: this.changeEmail,
      changeAllowPreview: this.changeAllowPreview,
    };

    return (
      <div className={styles.app}>
        <Router>
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/submit" exact strict render={() => (<AsyncSubmit {...submitProps} />)} />
            <Route path="/preview" exact strict render={() => {
              if (allowPreview) {
                return <AsyncPreview {...this.state} />
              }
              return <Redirect to="/submit" />
            }} />
            <Route path="/submit" exact strict render={() => (<AsyncSubmit {...submitProps} />)} />
            <Route path="/posts/:id" exact strict component={AsyncView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  client: PropTypes.instanceOf(ApolloClient).isRequired,
}

export default withApollo(App);
