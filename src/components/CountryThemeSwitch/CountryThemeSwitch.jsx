import React from 'react';
import PropTypes from 'prop-types';
import grassBlock from '../../assets/theme3/pasto.jpg';
import diamondBlock from '../../assets/theme3/diamondStoneBlock.jpg';
import tntBlock from '../../assets/theme3/tnt.jpg';
import Entity from '../Entity/Entity';

function CountryThemeSwitch({ type, children }) {
  let entityToRender;

  if (type === ' ') entityToRender = <Entity image={grassBlock} coverHeight />;
  else if (type === '-' || type === '|' || type === '+') { entityToRender = <Entity image={tntBlock} coverHeight />; } else if (type === 'g') {
    entityToRender = (
      <Entity image={diamondBlock} coverHeigth>
        {children}
      </Entity>
    );
  } else if (type === 'p') {
    entityToRender = (
      <Entity image={grassBlock} coverHeight>
        {children}
      </Entity>
    );
  }
  return entityToRender;
}

export default CountryThemeSwitch;

CountryThemeSwitch.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

CountryThemeSwitch.defaultProps = {
  children: null,
};
