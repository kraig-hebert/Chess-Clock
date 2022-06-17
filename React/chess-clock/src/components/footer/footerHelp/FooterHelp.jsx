// import basics
import React from 'react';
import './footerHelp.css';
// import components
import FooterHelpButtons from './footerHelpButtons/FooterHelpButtons';
import FooterHelpText from './footerHelpText/FooterHelpText';

const FooterHelp = () => {
  return (
    <div className="footer-help">
      <div className="footer-help-buttons">
        <FooterHelpButtons />
      </div>
      <div className="footer-help-text">
        <FooterHelpText />
      </div>
    </div>
  );
};

export default FooterHelp;
