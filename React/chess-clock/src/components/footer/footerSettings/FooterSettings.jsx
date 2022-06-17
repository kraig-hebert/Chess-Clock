import React from 'react';
import './footerSettings.css';
import { useStateContext } from '../../../contexts/ContextProvider';

import FooterSettingsButton from './footerSettingsButton/FooterSettingsButton';
import FooterInput from './footerInput/FooterInput';

const FooterSettings = () => {
  const { tempGameType, settingsChanged } = useStateContext();

  return (
    <div className="footer-settings">
      <div className="input-group">
        <p>Set Minutes</p>
        <div className="input-item">
          <FooterSettingsButton name="minutes" />
          <FooterInput
            props={{
              name: 'minutes',
              value: tempGameType.minutes,
              class: settingsChanged.minutes,
            }}
          />
        </div>
        {/* end input-item */}
      </div>
      {/* end input-group */}

      <div className="input-group">
        <p>Set Seconds</p>
        <div className="input-item">
          <FooterSettingsButton name="seconds" />
          <FooterInput
            props={{
              name: 'seconds',
              value: tempGameType.seconds,
              class: settingsChanged.seconds,
            }}
          />
        </div>
        {/* end input-item */}
      </div>
      {/* end input-group */}

      <div className="input-group">
        <p>Set Increment</p>
        <div className="input-item">
          <FooterSettingsButton name="increment" />
          <FooterInput
            props={{
              name: 'increment',
              value: tempGameType.increment,
              class: settingsChanged.increment,
            }}
          />
        </div>
        {/* end input-item */}
      </div>
      {/* end input-group */}
    </div>
  );
};

export default FooterSettings;
