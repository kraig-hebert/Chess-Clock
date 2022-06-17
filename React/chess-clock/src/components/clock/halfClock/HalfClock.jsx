// import basics
import React from 'react';
import './halfClock.css';
import { useStateContext } from '../../../contexts/ContextProvider';
//import components
import TimerName from './timerName/TimerName';
import Timer from './timer/Timer';

const HalfClock = ({ side }) => {
  const { whiteTimer, blackTimer } = useStateContext();

  return (
    <div className="halfClock">
      <TimerName side={side} />
      <Timer
        timer={
          side === 'White'
            ? [whiteTimer.getMinutes(), whiteTimer.getSeconds()]
            : [blackTimer.getMinutes(), blackTimer.getSeconds()]
        }
      />
    </div>
  );
};

export default HalfClock;
