import React from 'react';
import './footerButton.css';
import { MdOutlineInput } from 'react-icons/md';
import { useStateContext } from '../../../contexts/ContextProvider';

const FooterButton = ({ text }) => {
  const { handleFooterButton } = useStateContext();
  return (
    <button
      className="footerButton"
      onClick={(e) => handleFooterButton(e, text)}
    >
      <MdOutlineInput />
    </button>
  );
};

export default FooterButton;
