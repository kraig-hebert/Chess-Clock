import React from 'react';
import './footerHelpTopic.css';
import { BiChevronsRight } from 'react-icons/bi';

const FooterHelpTopic = ({ text }) => {
  return (
    <>
      <button
        className="footer-help-topic"
        style={
          text === 'play'
            ? { borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }
            : text === 'reload'
            ? {
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              }
            : {}
        }
        onClick={() => {}}
      >
        <BiChevronsRight />
        <span>{text}</span>
      </button>
    </>
  );
};

export default FooterHelpTopic;
