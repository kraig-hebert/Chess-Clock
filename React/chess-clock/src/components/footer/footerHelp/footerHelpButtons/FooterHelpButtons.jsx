// import the basics
import React, { useState } from 'react';
import './footerHelpButtons.css';
import { useStateContext } from '../../../../contexts/ContextProvider';
// import icons
import { BiChevronsRight, BiChevronRight } from 'react-icons/bi';

const FooterHelpButtons = () => {
  const { buttonActive, setButtonActive } = useStateContext();

  const buttonRefreshState = {
    play: false,
    settings: false,
    reload: false,
  };
  const handleButtonClick = (btnName) => {
    setButtonActive({ ...buttonRefreshState, [btnName]: true });
  };

  return (
    <>
      <button
        className={`footer-help-topic ${
          buttonActive.play && 'footer-help-active'
        }`}
        id="play"
        onClick={() => handleButtonClick('play')}
      >
        {buttonActive.play ? <BiChevronsRight /> : <BiChevronRight />}
        <span>Play/Pause</span>
      </button>
      <button
        className={`footer-help-topic ${
          buttonActive.settings && 'footer-help-active'
        }`}
        id="settings"
        onClick={() => handleButtonClick('settings')}
      >
        {buttonActive.settings ? <BiChevronsRight /> : <BiChevronRight />}
        <span>Settings</span>
      </button>
      <button
        className={`footer-help-topic ${
          buttonActive.reload && 'footer-help-active'
        }`}
        id="reload"
        onClick={() => handleButtonClick('reload')}
      >
        {buttonActive.reload ? <BiChevronsRight /> : <BiChevronRight />}
        <span>Reload</span>
      </button>
    </>
  );
};

export default FooterHelpButtons;
