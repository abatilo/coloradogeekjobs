import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './Banner.module.scss';

class Banner extends Component {
  goToSubmitJob = () => {
    const { history } = this.props;
    history.push('/submit');
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.goToSubmitJob();
    }
  }

  render() {
    return (
      <div className={styles.banner}>
        <p>
          ColoradoGeekJobs is your one stop shop for finding a developer job in Colorado.
        </p>
        <div
          className={styles.button}
          role="button"
          tabIndex={0}
          onClick={this.goToSubmitJob}
          onKeyPress={this.handleKeyDown}
        >
          Post a job
        </div>
      </div>
    )
  }
}

Banner.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}

export default withRouter(Banner);
