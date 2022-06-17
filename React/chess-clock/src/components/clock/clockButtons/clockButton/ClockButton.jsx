// import basics
import React from 'react';
import './clockButton.css';
import { useStateContext } from '../../../../contexts/ContextProvider';

const ClockButton = ({ props }) => {
  const { handleClockButton } = useStateContext();

  return (
    <div
      className={`clockButton ${props.class}`}
      onClick={(e) => handleClockButton(e, props.text)}
    >
      {props.icon}
    </div>
  );
};

export default ClockButton;
