import React from 'react';
import PropTypes from 'prop-types';
import styles from './Entity.module.css';

function Entity({
  image, coverWidth, coverHeight, children, refProp,
}) {
  return (
    <div className={styles.entity} ref={refProp}>
      <img
        src={image}
        alt="Game block"
        className={`${styles.image} ${coverWidth && styles.coverWidth} ${coverHeight && styles.coverHeight}`}
      />
      {children}
    </div>
  );
}

export default Entity;

Entity.propTypes = {
  image: PropTypes.string.isRequired,
  coverWidth: PropTypes.bool,
  coverHeight: PropTypes.bool,
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  refProp: PropTypes.any,
};

Entity.defaultProps = {
  coverWidth: false,
  coverHeight: true,
  children: null,
  refProp: null,
};
