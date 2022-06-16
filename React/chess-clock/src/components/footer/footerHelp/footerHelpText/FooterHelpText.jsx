import React from 'react';
import './footerHelpText.css';
import { useStateContext } from '../../../../contexts/ContextProvider';

const FooterHelpText = () => {
  const { buttonActive } = useStateContext();
  return (
    <>
      {buttonActive.play ? (
        <ul>
          <li>Press the play button to begin the game.</li>
          <li>Press the pause button to pause the game timer.</li>
          <li>The space bar will swap turns on the timer.</li>
          <li>
            The space bar is disabled until the game has begun, and while the
            game is paused.
          </li>
        </ul>
      ) : buttonActive.settings ? (
        <ul>
          <li>Set Minutes: Enter the number of minutes the game will be.</li>
          <li>
            Set Seconds: Enter the number of seconds the game will start with.
          </li>
          <li>
            Set Increment: Enter the number of seconds to increment before every
            turn
          </li>
        </ul>
      ) : (
        <p>Click the reload button to reset the game timer and turn.</p>
      )}
      <p></p>
    </>
  );
};

export default FooterHelpText;
