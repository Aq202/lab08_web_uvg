import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './StartPage.module.css';
import consts from '../../utils/consts';

function StartPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${consts.host}/config`);
  };
  return (
    <div className={styles.startPage}>
      <h1>LABERINTO</h1>
      <button type="button" onClick={handleClick}>START</button>
    </div>
  );
}

export default StartPage;

StartPage.propTypes = {

};

StartPage.defaultProps = {

};
