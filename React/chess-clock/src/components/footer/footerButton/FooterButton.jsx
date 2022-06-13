import React from 'react';
import './footerButton.css';
import { MdOutlineInput } from 'react-icons/md';
import { useStateContext } from '../../../contexts/ContextProvider';

const FooterButton = ({ text }) => {
  const { gameType, setGameType, tempGameType } = useStateContext();
  return (
    <button
      className="footerButton"
      onClick={(e) => setGameType({ ...gameType, [text]: tempGameType[text] })}
    >
      <MdOutlineInput />
    </button>
  );
};

export default FooterButton;
