import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './FinishPage.module.css';
import consts from '../../utils/consts';

function FinishPage({ title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${consts.host}/config`);
  };
  return (
    <div className={styles.finishPage}>
      <h1>{title}</h1>
      <button type="button" onClick={handleClick}>VOLVER A JUGAR</button>
    </div>
  );
}

export default FinishPage;

FinishPage.propTypes = {
  title: PropTypes.string.isRequired,
};

FinishPage.defaultProps = {

};
