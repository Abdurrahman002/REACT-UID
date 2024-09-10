import React from 'react';
import Stopwatch from './stopwatch';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Stopwatch initialTime={0} />
    </div>
  );
};

export default App;
