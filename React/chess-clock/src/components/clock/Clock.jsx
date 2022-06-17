// import basics
import React from 'react';
import './clock.css';
// import components
import HalfClock from './halfClock/HalfClock';
import ClockButtons from './clockButtons/ClockButtons';

const Clock = () => {
  return (
    <div className="clock">
      <HalfClock side="White" />
      <ClockButtons />
      <HalfClock side="Black" />
    </div>
  );
};

export default Clock;
