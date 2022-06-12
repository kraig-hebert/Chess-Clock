import React from 'react';
import './footer.css';
import FooterButton from './footerButton/FooterButton';
import FooterInput from './footerInput/FooterInput';
import { useStateContext } from '../../contexts/ContextProvider';

const Footer = () => {
  const { footerActive } = useStateContext();
  return (
    <>
      {footerActive ? (
        <div className="footer">
          <div className="input-group">
            <p>Set Minutes</p>
            <div className="input-item">
              <FooterButton text="Set Minutes" />
              <FooterInput />
            </div>
          </div>
          <div className="input-group">
            <p>Set Seconds</p>
            <div className="input-item">
              <FooterButton text="Set Seconds" />
              <FooterInput />
            </div>
          </div>
          <div className="input-group">
            <p>Set Increment</p>
            <div className="input-item">
              <FooterButton text="Set Incremenet" />
              <FooterInput />
            </div>
          </div>
        </div>
      ) : (
        <div className="footer"></div>
      )}
    </>
  );
};

export default Footer;
