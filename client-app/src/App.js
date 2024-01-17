// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LevelList from './Components/LevelList';
import Level from './Components/Level';
import NextLevelPage from './Components/NextLeveLConfirmation';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Levels' element={<LevelList />} />
          <Route path="/Level/:level" element={<Level />} />
          <Route path="/next-level/:level" element={<NextLevelPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
