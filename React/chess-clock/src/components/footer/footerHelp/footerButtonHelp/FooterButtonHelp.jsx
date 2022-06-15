import React from 'react';
import './footerButtonHelp.css';
import FooterHelpTopic from './footerHelpTopic/FooterHelpTopic';

const FooterButtonHelp = () => {
  return (
    <>
      <FooterHelpTopic text="play" />
      <FooterHelpTopic text="settings" />
      <FooterHelpTopic text="reload" />
    </>
  );
};

export default FooterButtonHelp;
