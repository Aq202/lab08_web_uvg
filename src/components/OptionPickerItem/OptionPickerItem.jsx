import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionPickerItem.module.css';

function OptionPickerItem({
  title, image, value, onChange, selected,
}) {
  return (
    <button type="button" onClick={() => onChange(value)} className={`${styles.optionPickerItem} ${selected && styles.selected}`}>
      <img src={image} alt={title} />
      <span>{title}</span>
    </button>
  );
}

export default OptionPickerItem;

OptionPickerItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

OptionPickerItem.defaultProps = {
  selected: false,
};
