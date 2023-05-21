import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MazePage from '../../pages/MazePage/MazePage';
import StartPage from '../../pages/StartPage/StartPage';
import ConfigPage from '../../pages/ConfigPage/ConfigPage';
import FinishPage from '../../pages/FinishPage/FinishPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/game" element={<MazePage />} />
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/win" element={<FinishPage title="¡GANASTE!" />} />
        <Route path="/lose" element={<FinishPage title="Te quedaste sin tiempo" />} />
        <Route path="*" element={<StartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
