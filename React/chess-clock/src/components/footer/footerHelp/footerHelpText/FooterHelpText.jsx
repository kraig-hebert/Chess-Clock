// import basics
import React from 'react';
import './footerHelpText.css';
import { useStateContext } from '../../../../contexts/ContextProvider';

const FooterHelpText = () => {
  const { buttonActive } = useStateContext();
  return (
    <>
      {buttonActive.play ? (
        <ul>
          <li>
            Press the play button to begin the game, and transform into the
            pause button.
          </li>

          <li>Press the pause button to pause the game timer.</li>
          <li>The space bar will swap turns on the timer.</li>
          <li>
            The space bar is disabled until the game has begun, and while the
            game is paused.
          </li>
        </ul>
      ) : buttonActive.settings ? (
        <ul>
          <li>
            <u>Set Minutes:</u> Enter the number of minutes the game will be.
          </li>
          <li>
            <u>Set Seconds:</u> Enter the number of extra seconds the game will
            start with.
          </li>
          <li>
            <u>Set Increment:</u> Enter the number of seconds to increment
            before every turn
          </li>
        </ul>
      ) : (
        <ul>
          <li>Click the reload button to reset the game timer and turn.</li>
        </ul>
      )}
    </>
  );
};

export default FooterHelpText;
