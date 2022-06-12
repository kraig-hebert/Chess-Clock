import React from 'react';
import './footerInput.css';

const FooterInput = () => {
  return (
    <>
      <input
        type="text"
        defaultValue="10"
        className="footerInput"
        maxLength="2"
      />
    </>
  );
};
export default FooterInput;
