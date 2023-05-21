import React from 'react';
import PropTypes from 'prop-types';
import c1Down from '../../assets/character1/c1_down.png';
import c1Up from '../../assets/character1/c1_up.png';
import c1Left from '../../assets/character1/c1_left.png';
import c1Right from '../../assets/character1/c1_right.png';
import c2Down from '../../assets/character2/c2_down.png';
import c2Up from '../../assets/character2/c2_up.png';
import c2Left from '../../assets/character2/c2_left.png';
import c2Right from '../../assets/character2/c2_right.png';
import c3Down from '../../assets/character3/c3_down.png';
import c3Up from '../../assets/character3/c3_up.png';
import c3Left from '../../assets/character3/c3_left.png';
import c3Right from '../../assets/character3/c3_right.png';
import consts from '../../utils/consts';
import styles from './Player.module.css';

function Player({ move, skin, refProp }) {
  let image;

  if (skin === 1 || ![1, 2, 3].includes(skin)) {
    if ((!move || move === consts.down)) {
      image = c1Down;
    } else if (move === consts.up) {
      image = c1Up;
    } else if (move === consts.left) {
      image = c1Left;
    } else if (move === consts.right) {
      image = c1Right;
    }
  } else if (skin === 2) {
    if ((!move || move === consts.down)) {
      image = c2Down;
    } else if (move === consts.up) {
      image = c2Up;
    } else if (move === consts.left) {
      image = c2Left;
    } else if (move === consts.right) {
      image = c2Right;
    }
  } else if (skin === 3) {
    if ((!move || move === consts.down)) {
      image = c3Down;
    } else if (move === consts.up) {
      image = c3Up;
    } else if (move === consts.left) {
      image = c3Left;
    } else if (move === consts.right) {
      image = c3Right;
    }
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
