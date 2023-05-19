import React from 'react';
import PropTypes from 'prop-types';
import styles from './Entity.module.css';

function Entity({ val }) {
  return (
    <div className={styles.Entity}>{val}</div>
  );
}

export default Entity;

Entity.propTypes = {
  val: PropTypes.string.isRequired,
};

Entity.defaultProps = {

};
