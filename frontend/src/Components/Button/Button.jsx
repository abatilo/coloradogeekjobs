import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

class Button extends Component {

  noop = () => {
    // No operation
  }

  render() {
    const {children, onClick} = this.props;
    return (
      <div
        className={styles.button}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyPress={this.noop}
      >
        {children}
      </div>
    );
  }
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
