import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmissionInput.module.scss';

const SubmissionInput = ({inputLabel, optionsLabel, children}) => (
  <div className={styles.inputField}>
    <div className={styles.label}>
      <div className={styles.labelTextContainer}>
        <span className={styles.labelText}>{inputLabel}</span>
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.options}>
          <div className={styles.optionsText}>{optionsLabel}</div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
)

SubmissionInput.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  optionsLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default SubmissionInput;
