import React from 'react';
import './clockButtons.css';
import Button from './button/Button';
import { TiMediaPlay } from 'react-icons/ti';
import { BiReset, BiStopCircle } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
const ClockButtons = () => {
  return (
    <div className="clockButtons">
      <Button props={{ icon: <TiMediaPlay /> }} />
      <Button props={{ icon: <IoMdSettings /> }} />
      <Button props={{ icon: <BiReset /> }} />
      <Button props={{ icon: <BiStopCircle /> }} />
    </div>
  );
};

export default ClockButtons;
