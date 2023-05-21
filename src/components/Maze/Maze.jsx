/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import styles from './Maze.module.css';
import useFetch from '../../hooks/useFetch';
import StoneMazeThemeSwitch from '../StoneMazeThemeSwitch/StoneMazeThemeSwitch';
import Player from '../Player/Player';
import consts from '../../utils/consts';

function Maze({ w, h }) {
  const { callFetch, result } = useFetch();

  const [maze, setMaze] = useState(null);
  const [keyPressed, setKeyPressed] = useState(null);
  const [playerPosition, setPlayerPosition] = useState({ row: 1, col: 1 });
  const [win, setWin] = useState(false);

  const playerRef = useRef();

  const autoFocus = useCallback((el) => (el ? el.focus() : null), []);

  const getMaze = (rows, cols) => callFetch({ uri: `/maze?type=json&w=${rows}&h=${cols}` });

  const mazeKeyUpHandler = (e) => {
    if (win) return;

    const { key } = e;
    if (key === 'ArrowUp') setKeyPressed({ val: consts.up });
    if (key === 'ArrowRight') setKeyPressed({ val: consts.right });
    if (key === 'ArrowLeft') setKeyPressed({ val: consts.left });
    if (key === 'ArrowDown') setKeyPressed({ val: consts.down });
  };

  const keyDownHandler = (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault(); // Prevenir el comportamiento predeterminado del desplazamiento
    }
  };

  const movePlayer = (move) => {
    if (!maze) return;

    const { row: currentRow, col: currentCol } = playerPosition;

    // calcular nueva posicion
    let newRow = currentRow;
    let newCol = currentCol;

    switch (move) {
      case consts.up:
        newRow -= 1;
        break;
      case consts.down:
        newRow += 1;
        break;
      case consts.left:
        newCol -= 1;
        break;
      case consts.right:
        newCol += 1;
        break;
      default:
        break;
    }

    // verificar si el espacio está vacio
    if (maze[newRow][newCol] !== ' ' && maze[newRow][newCol] !== 'g') {
      return;
    }

    setMaze((lastMaze) => {
      const mazeCopy = [...lastMaze];

      // limpiar P y W
      const filteredMaze = mazeCopy.map((row) => row.map((item) => (item === 'p' || item === consts.win ? ' ' : item)));

      // cambiar posicion
      filteredMaze[currentRow][currentCol] = ' ';
      filteredMaze[newRow][newCol] = maze[newRow][newCol] === 'g' ? consts.win : 'p';

      setPlayerPosition({ row: newRow, col: newCol });
      return filteredMaze;
    });

    // juego ganado
    if (maze[newRow][newCol] === 'g') setWin(true);
  };

  useEffect(() => {
    getMaze(w, h);
  }, []);

  useEffect(() => {
    setMaze(result);
  }, [result]);

  useEffect(() => {
    if (!keyPressed) return;
    movePlayer(keyPressed.val);
  }, [keyPressed]);

  useEffect(() => {
    if (!maze) return;
    playerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [maze]);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onKeyUp={mazeKeyUpHandler}
      onKeyDown={keyDownHandler}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex="0"
      onClick={mazeKeyUpHandler}
      className={styles.maze}
      style={{
        gridTemplateColumns: `repeat(${w * 2 + w + 1}, 50px)`,
        gridTemplateRows: `repeat(${2 * h + 1}, 50px)`,
        width: `${(w * 2 + w + 1) * 50}px`,
        height: `${(2 * h + 1) * 50}px`,
      }}
      ref={autoFocus}
    >
      {maze
        && maze.map((row, indexRow) => row.map((item, indexCol) => (item !== 'p' && item !== consts.win ? (
          <StoneMazeThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type={item} />
        ) : item === 'p' ? (
          <StoneMazeThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type={item}>
            <Player move={keyPressed?.val} refProp={playerRef} />
          </StoneMazeThemeSwitch>
        ) : (
          <StoneMazeThemeSwitch key={`ENTITdY${indexRow}${indexCol}`} type="g">
            <Player move={keyPressed?.val} />
          </StoneMazeThemeSwitch>
        )
        )))}
    </div>
  );
}

export default Maze;

Maze.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
};

Maze.defaultProps = {};
