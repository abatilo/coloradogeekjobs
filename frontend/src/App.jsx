import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
    jobTitle: 'Software Engineer',
    jobType: 'full',
    jobDescription: 'We are seeking multiple remote or NYC based Web Developers to work with us on an ongoing and/or per-project basis.\n\n**Our ideal candidate must have**:\n* Prior experience in working with a digital agency\n* Advanced front-end development experience.',
    companyName: 'Conga',
    companyWebsite: 'https://getconga.com',
    companyDescription: 'We have free lunch',
    how: 'Send an email to aaronbatilo@gmail.com',
    email: 'email@email',
    allowPreview: true,
    jobs: [],
  };

  componentWillMount() {
    this.setState({
      jobs: [
        {
          key: 0,
          id: 0,
          date: 1546289218682,
          jobTitle: 'Software Engineer',
          jobType: 'full',
          jobDescription: 'We are seeking multiple remote or NYC based Web Developers to work with us on an ongoing and/or per-project basis.\n\n**Our ideal candidate must have**:\n* Prior experience in working with a digital agency\n* Advanced front-end development experience.',
          companyName: 'Conga',
          companyWebsite: 'https://getconga.com',
          companyDescription: 'We have free lunch',
          how: 'Send an email to aaronbatilo@gmail.com',
        },
        {
          key: 1,
          id: 1,
          date: 1546289218682,
          jobTitle: 'Software Engineer',
          jobType: 'full',
          jobDescription: 'We are seeking multiple remote or NYC based Web Developers to work with us on an ongoing and/or per-project basis.\n\n**Our ideal candidate must have**:\n* Prior experience in working with a digital agency\n* Advanced front-end development experience.',
          companyName: 'Conga',
          companyWebsite: 'https://getconga.com',
          companyDescription: 'We have free lunch',
          how: 'Send an email to aaronbatilo@gmail.com',
        }
      ]
    });
  }

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

  render() {
    const { allowPreview, jobs } = this.state;
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
            <Route path="/" exact render={() => <AsyncHome jobs={jobs} />} />
            <Route path="/submit" exact render={() => (<AsyncSubmit {...submitProps} />)} />
            <Route path="/preview" exact render={() => {
              if (allowPreview) {
                return <AsyncPreview {...this.state} />
              }
              return <Redirect to="/submit" />
            }} />
            <Route path="/submit" exact render={() => (<AsyncSubmit {...submitProps} />)} />
            <Route path="/posts/:id" exact render={({match: { params: { id: pathID }}}) => {
              const pathIDAsNumber = parseInt(pathID, 10);
              const selectedJob = jobs.find(({id}) => id === pathIDAsNumber);
              if (selectedJob) {
                return <AsyncView {...selectedJob} />
              }
              return <Redirect to="/" />
            }} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
