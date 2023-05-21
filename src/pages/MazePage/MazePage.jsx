import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Maze from '../../components/Maze/Maze';

function MazePage() {
  const param = useSearchParams();
  const [mazeSize, setMazeSize] = useState(null);

  useEffect(() => {
    if (!param) return;

    const w = parseInt(param[0].get('w'), 10) || 10;
    const h = parseInt(param[0].get('h'), 10) || 10;

    setMazeSize({ w, h });
  }, []);
  return (
    mazeSize && <Maze h={mazeSize.h} w={mazeSize.w} />
  );
}

export default MazePage;

MazePage.propTypes = {

};

MazePage.defaultProps = {

};
