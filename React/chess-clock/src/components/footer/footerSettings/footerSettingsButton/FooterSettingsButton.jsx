// import basics
import React from 'react';
import './footerSettingsButton.css';
// import components
import { MdOutlineInput } from 'react-icons/md';
import { useStateContext } from '../../../../contexts/ContextProvider';

const FooterSettingsButton = ({ name }) => {
  const { handleFooterSettingsButton } = useStateContext();
  return (
    <button
      className="footer-settings-button"
      onClick={() => handleFooterSettingsButton(name)}
    >
      <MdOutlineInput />
    </button>
  );
};

export default FooterSettingsButton;
