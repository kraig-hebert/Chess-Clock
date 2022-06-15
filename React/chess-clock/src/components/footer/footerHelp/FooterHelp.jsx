import React from 'react';
import './footerHelp.css';

const FooterHelp = () => {
  return (
    <div className="footer-help">
      <div className="footer-button-help">
        <FooterButtonHelp />
      </div>
      <div className="footer-help-text">
        <FooterHelpText />
      </div>
    </div>
  );
};

export default FooterHelp;
