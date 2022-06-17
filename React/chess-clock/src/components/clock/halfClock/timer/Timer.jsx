//import basics
import React from 'react';
import './timer.css';

const Timer = ({ timer }) => {
  return (
    <div className="timer">
      <p>
        {`${timer[0].toString().padStart(2, '0')}:${timer[1]
          .toString()
          .padStart(2, '0')}`}
      </p>
    </div>
  );
};

export default Timer;
