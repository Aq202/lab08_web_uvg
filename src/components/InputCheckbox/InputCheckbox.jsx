import React from 'react';
import PropTypes from 'prop-types';
import randomString from '../../utils/randomString';
import styles from './InputCheckbox.module.css';

function InputCheckbox({
  title, error, checked, onChange, name, className, ...props
}) {
  const id = randomString(15);

  return (
    <div className={`${`${styles.inputContainer} ${className}`} ${error ? styles.error : ''}`}>
      <div className={styles.inputBox}>
        <div className={styles.radioContainer} key={randomString(10)}>
          <input
            id={id}
            type="checkbox"
            name={name}
            defaultChecked={checked}
            onChange={onChange}
            className={styles.checkbox}
            {...props}
          />
          <label htmlFor={id}>{title}</label>
        </div>
      </div>
      {error && <div className={styles.inputError}>{error}</div>}
    </div>
  );
}

InputCheckbox.propTypes = {
  title: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
};

InputCheckbox.defaultProps = {
  error: null,
  name: '',
  className: '',
};

export default InputCheckbox;
