import React from 'react';
import ProfileCard from './profile-card';
//import deadpoolImage from './deadpool.jpg'; // Save the Deadpool image in the src folder
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ProfileCard
        image="https://i.pinimg.com/originals/d3/61/f8/d361f88c0a9ffca040d35b5734f31d1a.jpg"
        name="Deadpool"
        description="Mercenary with a mouth. Breaking the fourth wall since forever."
        github="https://github.com/deadpool"
        leetcode="https://leetcode.com/deadpool"
        linkedin="https://www.linkedin.com/in/deadpool"
      />
    </div>
  );
};

export default App;
