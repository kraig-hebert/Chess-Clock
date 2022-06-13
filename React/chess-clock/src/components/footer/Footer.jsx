import React from 'react';
import './footer.css';
import FooterButton from './footerButton/FooterButton';
import FooterInput from './footerInput/FooterInput';
import { useStateContext } from '../../contexts/ContextProvider';

const Footer = () => {
  const { footerActive, gameType, tempGameType, settingsChanged } =
    useStateContext();
  return (
    <>
      {footerActive ? (
        <div className="footer">
          <div className="input-group">
            <p>Set Minutes</p>
            <div className="input-item">
              <FooterButton text="minutes" />
              <FooterInput
                props={{
                  text: 'minutes',
                  value: tempGameType.minutes,
                  class: settingsChanged.minutes,
                }}
              />
            </div>
          </div>
          <div className="input-group">
            <p>Set Seconds</p>
            <div className="input-item">
              <FooterButton text="seconds" />
              <FooterInput
                props={{
                  text: 'seconds',
                  value: tempGameType.seconds,
                  class: settingsChanged.seconds,
                }}
              />
            </div>
          </div>
          <div className="input-group">
            <p>Set Increment</p>
            <div className="input-item">
              <FooterButton text="increment" />
              <FooterInput
                props={{
                  text: 'increment',
                  value: tempGameType.increment,
                  class: settingsChanged.increment,
                }}
              />
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
