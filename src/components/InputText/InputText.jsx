import React from 'react';
import PropTypes from 'prop-types';
import randomId from '../../utils/randomString';
import styles from './InputText.module.css';

function InputText({
  title, error, value, onChange, name, className, ...props
}) {
  const id = randomId(15);
  return (
    <div className={`${styles.inputTextContainer} ${className} ${error ? styles.error : ''}`}>
      {title && (
        <label htmlFor={id}>
          {title}
        </label>
      )}
      <input type="text" {...props} id={id} name={name} defaultValue={value} onChange={onChange} />
      {error && <div className={styles.inputError}>{error}</div>}
    </div>
  );
}

InputText.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,

};

InputText.defaultProps = {
  error: null,
  value: '',
  name: randomId(15),
  onChange: null,
  title: null,
  className: '',

};

export default InputText;
