import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && seconds > 0) {
      const interval = setInterval(() => setSeconds((s) => s - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [active, seconds]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  const percentage = (seconds / 1500) * 100;

  return (
    <div className="timer-page">
      <h1>⏱ Focus Timer</h1>
      <div className="circle">
        <svg width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#555"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#00bcd4"
            strokeWidth="10"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 90}`}
            strokeDashoffset={`${((100 - percentage) / 100) * 2 * Math.PI * 90}`}
            transform="rotate(-90 100 100)"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize="24"
            fill="currentColor"
          >
            {formatTime(seconds)}
          </text>
        </svg>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setActive(!active)}>
          {active ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => setSeconds(1500)}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
