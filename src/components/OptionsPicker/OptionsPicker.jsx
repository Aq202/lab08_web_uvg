import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionsPicker.module.css';
import OptionPickerItem from '../OptionPickerItem/OptionPickerItem';

function OptionsPicker({
  title, options, value, onChange, className,
}) {
  return (
    <div className={`${styles.optionsPicker} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.optionsContainer}>
        {options.map((op) => (
          <OptionPickerItem
            key={`OP${op.value}`}
            image={op.image}
            title={op.title}
            value={op.value}
            onChange={onChange}
            selected={value === op.value}
          />
        ))}
      </div>
    </div>
  );
}

export default OptionsPicker;

OptionsPicker.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  value: PropTypes.number,
};

OptionsPicker.defaultProps = {
  className: '',
  value: null,
};
