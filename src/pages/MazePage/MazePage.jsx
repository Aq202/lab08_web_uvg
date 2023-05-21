import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Maze from '../../components/Maze/Maze';

function MazePage() {
  const param = useSearchParams();
  const [mazeConfig, setMazeConfig] = useState(null);

  useEffect(() => {
    if (!param) return;

    const w = parseInt(param[0].get('w'), 10) || 10;
    const h = parseInt(param[0].get('h'), 10) || 10;
    const skin = parseInt(param[0].get('skin'), 10) || 1;
    const time = parseInt(param[0].get('time'), 10) || null;
    const theme = parseInt(param[0].get('theme'), 10) || 1;

    setMazeConfig({
      w,
      h,
      skin,
      time: time > 0 ? time : null,
      theme,
    });
  }, []);
  return (
    mazeConfig && (
      <Maze
        h={mazeConfig.h}
        w={mazeConfig.w}
        skin={mazeConfig.skin}
        time={mazeConfig.time}
        theme={mazeConfig.theme}
      />
    )
  );
}

export default MazePage;

MazePage.propTypes = {};

MazePage.defaultProps = {};
