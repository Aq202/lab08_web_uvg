import React from 'react';
import PropTypes from 'prop-types';
import sandBlock from '../../assets/theme2/sandBlock.jpg';
import diamondBlock from '../../assets/theme2/diamondStoneBlock.jpg';
import cactusBlock from '../../assets/theme2/cactusBlock.png';
import Entity from '../Entity/Entity';

function BeachThemeSwitch({ type, children }) {
  let entityToRender;

  if (type === ' ') entityToRender = <Entity image={sandBlock} coverHeight />;
  else if (type === '-' || type === '|' || type === '+') { entityToRender = <Entity image={cactusBlock} coverHeight />; } else if (type === 'g') {
    entityToRender = (
      <Entity image={diamondBlock} coverHeigth>
        {children}
      </Entity>
    );
  } else if (type === 'p') {
    entityToRender = (
      <Entity image={sandBlock} coverHeight>
        {children}
      </Entity>
    );
  }
  return entityToRender;
}

export default BeachThemeSwitch;

BeachThemeSwitch.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BeachThemeSwitch.defaultProps = {
  children: null,
};
