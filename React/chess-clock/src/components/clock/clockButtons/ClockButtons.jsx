import React from 'react';
import './clockButtons.css';
import ClockButton from './clockButton/ClockButton';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { BiReset, BiStopCircle } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
const ClockButtons = () => {
  return (
    <div className="clockButtons">
      <ClockButton props={{ text: 'play', icon: <AiOutlinePlayCircle /> }} />
      <ClockButton props={{ text: 'settings', icon: <IoMdSettings /> }} />
      <ClockButton props={{ text: 'reset', icon: <BiReset /> }} />
      <ClockButton props={{ text: 'stop', icon: <BiStopCircle /> }} />
    </div>
  );
};

export default ClockButtons;
