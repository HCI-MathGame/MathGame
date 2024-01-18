// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Level from './Components/Level';
import NextLevelPage from './Components/NextLeveLConfirmation';
import CongratulationsPage from './Components/FinalPage';
import { useRef, useEffect, useState } from 'react';

function App() {

  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Add an event listener for the first user interaction
    const handleFirstUserInteraction = () => {
      setUserInteracted(true);
      window.removeEventListener('click', handleFirstUserInteraction);
    };

    window.addEventListener('click', handleFirstUserInteraction);

    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
    };
  }, []);

  useEffect(() => {
    // Play the audio only after the user has interacted
    if (userInteracted) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.play();
    }
  }, [userInteracted]);

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
      <audio ref={audioRef} src="%PUBLIC_URL%/music.mp3" loop />
    </div>
  );
}

export default App;