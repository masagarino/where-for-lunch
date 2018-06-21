import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ onBlurAction, value, name, text }) => (
  <div className={styles.root}>
    <input type="checkbox" onChange={onBlurAction} value={value} name={name} ></input><span>{text}</span>
  </div>
);

Checkbox.propTypes = {
  onBlurAction: PropTypes.func,
  name: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};


export default Checkbox;
