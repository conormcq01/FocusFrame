import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Timer from './pages/Timer';
import Navbar from './components/Navbar';
import './style.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme class to the entire body
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle theme"
        >
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
