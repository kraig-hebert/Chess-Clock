import React from 'react';
import './clockButtons.css';
import ClockButton from './clockButton/ClockButton';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { BiReset, BiHelpCircle } from 'react-icons/bi';
import { TbSettings } from 'react-icons/tb';
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
          icon: <TbSettings />,
        }}
      />
      <ClockButton props={{ text: 'reset', icon: <BiReset /> }} />
      <ClockButton props={{ text: 'help', icon: <BiHelpCircle /> }} />
    </div>
  );
};

export default ClockButtons;
