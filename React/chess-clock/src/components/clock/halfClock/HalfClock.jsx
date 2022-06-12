import React from 'react';
import './halfClock.css';
import TimerName from './timerName/TimerName';
import Timer from './timer/Timer';

const HalfClock = ({ side }) => {
  return (
    <div className="halfClock">
      <TimerName side={side} />
      <Timer />
    </div>
  );
};

export default HalfClock;
