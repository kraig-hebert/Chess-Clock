//import basics
import React from 'react';
import './clockButtons.css';
import { useStateContext } from '../../../contexts/ContextProvider';
//import components
import ClockButton from './clockButton/ClockButton';
//import icons
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { BiReset, BiHelpCircle } from 'react-icons/bi';
import { TbSettings } from 'react-icons/tb';

const ClockButtons = () => {
  const { footerSettingsActive, footerHelpActive, paused } = useStateContext();
  return (
    <div className="clockButtons">
      <ClockButton
        props={{
          text: 'play',
          class: paused && 'clock-button-active',
          icon: paused ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />,
        }}
      />
      <ClockButton
        props={{
          text: 'settings',
          class: footerSettingsActive && 'clock-button-active',
          icon: <TbSettings />,
        }}
      />
      <ClockButton props={{ text: 'reset', icon: <BiReset /> }} />
      <ClockButton
        props={{
          text: 'help',
          class: footerHelpActive && 'clock-button-active',
          icon: <BiHelpCircle />,
        }}
      />
    </div>
  );
};

export default ClockButtons;
