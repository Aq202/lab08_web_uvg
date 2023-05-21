import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MazePage from '../../pages/MazePage/MazePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<MazePage />} />
      </Routes>
    </Router>
  );
}

export default App;
