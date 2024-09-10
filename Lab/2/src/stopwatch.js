import React, { useState, useEffect } from 'react';
import './stopwatch.css';

const Stopwatch = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="time-display">{formatTime(time)}</div>
      <div className="controls">
        {!isRunning ? (
          <button onClick={startTimer} className="btn start">Start</button>
        ) : (
          <button onClick={stopTimer} className="btn stop">Stop</button>
        )}
        <button onClick={resetTimer} className="btn reset">Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
