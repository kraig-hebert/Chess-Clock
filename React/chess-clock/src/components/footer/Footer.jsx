import React from 'react';
import './footer.css';
import { useStateContext } from '../../contexts/ContextProvider';
import FooterSettings from './footerSettings/FooterSettings';
import FooterHelp from './footerHelp/FooterHelp';

const Footer = () => {
  const { footerSettingsActive, footerHelpActive } = useStateContext();
  return (
    <>
      {footerSettingsActive ? (
        <FooterSettings />
      ) : footerHelpActive ? (
        <FooterHelp />
      ) : (
        <div className="footer-blank"></div>
      )}
    </>
  );
};

export default Footer;
