import React from 'react';
import PropTypes from 'prop-types';
import c1Down from '../../assets/character1/c1_down.png';
import c1Up from '../../assets/character1/c1_up.png';
import c1Left from '../../assets/character1/c1_left.png';
import c1Right from '../../assets/character1/c1_right.png';
import consts from '../../utils/consts';
import styles from './Player.module.css';

function Player({ move, skin, refProp }) {
  let image;

  if ((!move || move === consts.down) && skin === parseInt(skin, 10)) {
    image = c1Down;
  } else if (move === consts.up && skin === parseInt(skin, 10)) {
    image = c1Up;
  } else if (move === consts.left && skin === parseInt(skin, 10)) {
    image = c1Left;
  } else if (move === consts.right && skin === parseInt(skin, 10)) {
    image = c1Right;
  }

  return (
    <div className={styles.player}>
      <div>
        <img
          src={image}
          alt="Game player"
        />
        <div className={styles.playerMargin} ref={refProp} />
      </div>
    </div>
  );
}

export default Player;

Player.propTypes = {
  move: PropTypes.string,
  skin: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  refProp: PropTypes.any,
};

Player.defaultProps = {
  move: null,
  skin: 1,
  refProp: null,
};
