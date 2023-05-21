import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ConfigPage.module.css';
import ConfigForm from '../../components/ConfigForm/ConfigForm';

function ConfigPage() {
  return (
    <div className={styles.configPage}>
      <h1>Configuracion</h1>
      <ConfigForm />
    </div>
  );
}

export default ConfigPage;

ConfigPage.propTypes = {

};

ConfigPage.defaultProps = {

};
