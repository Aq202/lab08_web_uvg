import React from 'react';
import PropTypes from 'prop-types';
// import styles from './StoneMazeThemeSwitch.module.css';
import diamondStone from '../../assets/theme1/diamondStoneBlock.jpg';
import lavaBlock from '../../assets/theme1/lavaBlock.jpg';
import stoneBlock from '../../assets/theme1/floorStoneBlock.jpg';
import Entity from '../Entity/Entity';

function StoneMazeThemeSwitch({ type, children }) {
  let entityToRender;

  if (type === ' ') entityToRender = <Entity image={stoneBlock} coverHeight />;
  else if (type === '-' || type === '|' || type === '+') { entityToRender = <Entity image={lavaBlock} coverHeight />; } else if (type === 'g') {
    entityToRender = (
      <Entity image={diamondStone} coverHeigth>
        {children}
      </Entity>
    );
  } else if (type === 'p') {
    entityToRender = (
      <Entity image={stoneBlock} coverHeight>
        {children}
      </Entity>
    );
  }
  return entityToRender;
}

export default StoneMazeThemeSwitch;

StoneMazeThemeSwitch.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

StoneMazeThemeSwitch.defaultProps = {
  children: null,
};
