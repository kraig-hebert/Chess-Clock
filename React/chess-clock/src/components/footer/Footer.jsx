// import basics
import React from 'react';
import './footer.css';
import { useStateContext } from '../../contexts/ContextProvider';
// import components
import FooterSettings from './footerSettings/FooterSettings';
import FooterHelp from './footerHelp/FooterHelp';

const Footer = () => {
  const { footerSettingsActive, footerHelpActive } = useStateContext();
  return (
    <footer className="footer">
      {footerSettingsActive ? (
        <FooterSettings />
      ) : footerHelpActive ? (
        <FooterHelp />
      ) : (
        <div className="footer-blank"></div>
      )}
    </footer>
  );
};

export default Footer;
