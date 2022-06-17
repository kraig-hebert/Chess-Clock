//import basics
import React from 'react';
import './timerName.css';

const TimerName = ({ side }) => {
  return (
    <div className="timerName">
      <p>{side}</p>
    </div>
  );
};

export default TimerName;
