// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Level from './Components/Level';
import NextLevelPage from './Components/NextLeveLConfirmation';
import CongratulationsPage from './Components/FinalPage';
import { useRef, useEffect, useState } from 'react';

function App() {


  return (
    <div>
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/Level/:level" element={<Level />} />
          <Route path="/next-level/:level" element={<NextLevelPage />} />
          <Route path="/final" element={<CongratulationsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;