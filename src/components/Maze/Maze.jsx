/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import styles from './Maze.module.css';
import useFetch from '../../hooks/useFetch';
import StoneMazeThemeSwitch from '../StoneMazeThemeSwitch/StoneMazeThemeSwitch';
import Player from '../Player/Player';
import consts from '../../utils/consts';
import BeachThemeSwitch from '../BeachThemeSwitch/BeachThemeSwitch';
import CountryThemeSwitch from '../CountryThemeSwitch/CountryThemeSwitch';

momentDurationFormatSetup(moment);

function Maze({
  w, h, skin, theme, time,
}) {
  const { callFetch, result, loading } = useFetch();

  const [maze, setMaze] = useState(null);
  const [keyPressed, setKeyPressed] = useState(null);
  const [playerPosition, setPlayerPosition] = useState({ row: 1, col: 1 });
  const [win, setWin] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);
  const [timeLeftCounter, setTimeLeftCounter] = useState(null);

  const playerRef = useRef();
  const navigate = useNavigate();

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

  const timeoutHandler = (initialTime) => {
    const interval = setInterval(() => {
      setTimeLeft((lastVal) => ((typeof lastVal !== 'number') ? initialTime : lastVal - 1));
    }, 1000);

    setTimeLeftCounter(interval);
  };

  const getTimeLeftInFormat = () => {
    const duration = moment.duration(timeLeft, 'seconds');
    return duration.format('HH:mm:ss');
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

  useEffect(() => {
    // colocar el timer
    if (!result || typeof time !== 'number') return;
    timeoutHandler(time);
  }, [time, result]);

  useEffect(() => {
    if (!win) return;
    clearTimeout(timeLeftCounter);
    navigate('/win');
  }, [win]);

  useEffect(() => {
    if (typeof timeLeft !== 'number') return;
    if (timeLeft <= 0) navigate('/lose');
  }, [timeLeft]);
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
      {maze && (theme === 1 || ![1, 2, 3].includes(theme))
        && maze.map((row, indexRow) => row.map((item, indexCol) => (item !== 'p' && item !== consts.win ? (
          <StoneMazeThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type={item} />
        ) : item === 'p' ? (
          <StoneMazeThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type={item}>
            <Player move={keyPressed?.val} refProp={playerRef} skin={skin} />
          </StoneMazeThemeSwitch>
        ) : (
          <StoneMazeThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type="g">
            <Player move={keyPressed?.val} skin={skin} />
          </StoneMazeThemeSwitch>
        )
        )))}

      {maze && (theme === 2)
        && maze.map((row, indexRow) => row.map((item, indexCol) => (item !== 'p' && item !== consts.win ? (
          <BeachThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type={item} />
        ) : item === 'p' ? (
          <BeachThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type={item}>
            <Player move={keyPressed?.val} refProp={playerRef} skin={skin} />
          </BeachThemeSwitch>
        ) : (
          <BeachThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type="g">
            <Player move={keyPressed?.val} skin={skin} />
          </BeachThemeSwitch>
        )
        )))}

      {maze && (theme === 3)
        && maze.map((row, indexRow) => row.map((item, indexCol) => (item !== 'p' && item !== consts.win ? (
          <CountryThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type={item} />
        ) : item === 'p' ? (
          <CountryThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type={item}>
            <Player move={keyPressed?.val} refProp={playerRef} skin={skin} />
          </CountryThemeSwitch>
        ) : (
          <CountryThemeSwitch key={`ENTITY${indexRow}${indexCol}`} type="g">
            <Player move={keyPressed?.val} skin={skin} />
          </CountryThemeSwitch>
        )
        )))}

      {
          // timer
          timeLeft !== null && (
            <div className={styles.timer}>{getTimeLeftInFormat()}</div>
          )
        }

      {
          loading && <div className={styles.loading}>Loading...</div>
        }
    </div>
  );
}

export default Maze;

Maze.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  skin: PropTypes.number,
  theme: PropTypes.number,
  time: PropTypes.number,
};

Maze.defaultProps = {
  skin: 1,
  theme: 1,
  time: null,
};
