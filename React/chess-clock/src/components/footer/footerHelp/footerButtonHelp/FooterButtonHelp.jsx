import React, { useState } from 'react';
import './footerButtonHelp.css';
import { BiChevronsRight, BiChevronRight } from 'react-icons/bi';
import { useStateContext } from '../../../../contexts/ContextProvider';

const FooterButtonHelp = () => {
  const { buttonActive, setButtonActive } = useStateContext();
  const buttonsItitialState = {
    play: false,
    settings: false,
    reload: false,
  };

  const handleButtonClick = (e, btn) => {
    setButtonActive({ ...buttonsItitialState, [btn]: true });
  };
  return (
    <>
      <button
        className={`footer-help-topic ${
          buttonActive.play && 'footer-help-active'
        }`}
        id="play"
        onClick={(e) => handleButtonClick(e, 'play')}
      >
        {buttonActive.play ? <BiChevronsRight /> : <BiChevronRight />}
        <span>Play/Pause</span>
      </button>
      <button
        className={`footer-help-topic ${
          buttonActive.settings && 'footer-help-active'
        }`}
        id="settings"
        onClick={(e) => handleButtonClick(e, 'settings')}
      >
        {buttonActive.settings ? <BiChevronsRight /> : <BiChevronRight />}
        <span>Settings</span>
      </button>
      <button
        className={`footer-help-topic ${
          buttonActive.reload && 'footer-help-active'
        }`}
        id="reload"
        onClick={(e) => handleButtonClick(e, 'reload')}
      >
        {buttonActive.reload ? <BiChevronsRight /> : <BiChevronRight />}
        <span>Reload</span>
      </button>
    </>
  );
};

export default FooterButtonHelp;
