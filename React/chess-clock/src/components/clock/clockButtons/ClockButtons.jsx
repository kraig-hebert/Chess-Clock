import React from 'react';
import './clockButtons.css';
import ClockButton from './clockButton/ClockButton';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { BiReset, BiStopCircle } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { useStateContext } from '../../../contexts/ContextProvider';
const ClockButtons = () => {
  const { footerActive, paused, setPaused } = useStateContext();
  return (
    <div className="clockButtons">
      <ClockButton
        props={{
          text: 'play',
          class: !paused ? '' : 'clock-button-active',
          icon: !paused ? <AiOutlinePlayCircle /> : <AiOutlinePauseCircle />,
        }}
      />
      <ClockButton
        props={{
          text: 'settings',
          class: footerActive && 'clock-button-active',
          icon: <IoMdSettings />,
        }}
      />
      <ClockButton props={{ text: 'reset', icon: <BiReset /> }} />
      <ClockButton props={{ text: 'stop', icon: <BiStopCircle /> }} />
    </div>
  );
};

export default ClockButtons;
