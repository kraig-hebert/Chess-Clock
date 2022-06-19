import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';

const stateContext = createContext();
let timer; // global name for setTimeout functions

export const ContextProvider = ({ children }) => {
  // used to not active use effect on load
  const firstUpdate = useRef(true);
  // used to verify first move of game to add increment to white side
  const firstMove = useRef(true);
  // used to trigger useEffect to tick 1 second off of the timer
  const [tick, setTick] = useState(1);
  // sets footer type to be active and shows active button
  const [footerSettingsActive, setFooterSettingsActive] = useState(true);
  const [footerHelpActive, setFooterHelpActive] = useState(false);
  // tracks turn status....true=white turn false=black turn
  const [turn, setTurn] = useState(true);
  // sets play/pause button icon and color
  const [paused, setPaused] = useState(false);
  // object that reflects each sides timer
  const [whiteTimer, setWhiteTimer] = useState(new Date(0, 0, 0, 0, 10, 0));
  const [blackTimer, setBlackTimer] = useState(new Date(0, 0, 0, 0, 10, 0));

  /* game settings used for when settings up a new game */
  const [gameType, setGameType] = useState({
    minutes: 10,
    seconds: 0,
    increment: 5,
  });

  /* tracks footerSettings inputs and is used to update gameType */
  const [tempGameType, setTempGameType] = useState({
    minutes: 10,
    seconds: 0,
    increment: 5,
  });

  /* used by footerSettings to check if an input's value does not match gameType */
  const [settingsChanged, setSettingsChanged] = useState({
    minutes: '',
    seconds: '',
    increment: '',
  });

  // tracks which footer help button is clicked to use in FooterHelpButtons and FooterHelpText
  const [buttonActive, setButtonActive] = useState({
    play: true,
    settings: false,
    reload: false,
  });

  /* applies logic based on which clock button is pressed */
  const handleClockButton = (e, text) => {
    if (text === 'settings') {
      setFooterHelpActive(false);
      setFooterSettingsActive(!footerSettingsActive);
    } else if (text === 'play') {
      setPaused(!paused);
      if (tick === 1) setTick((p) => p + 1);
      else {
        clearTimeout(timer);
        setTick(1);
      }
    } else if (text === 'reset') {
      const wt = new Date(0, 0, 0, 0, gameType.minutes, gameType.seconds);
      const bt = new Date(0, 0, 0, 0, gameType.minutes, gameType.seconds);
      setWhiteTimer(wt);
      setBlackTimer(bt);
      resetGame();
    } else if (text === 'help') {
      setFooterSettingsActive(false);
      setFooterHelpActive(!footerHelpActive);
    }
  };

  /* when space is pressed.....
     stop current timer and add ameType.incremenet to its value
     and 
     change turn
     and 
     start timer loop of new turn
   */
  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      if (tick === 1)
        return undefined; // ignore space bar if game is paused or play button has not been pressed to start game
      else {
        clearTimeout(timer); // stop current timer
        if (turn) {
          const bt = blackTimer;
          bt.setSeconds(bt.getSeconds() + gameType.increment);
          setBlackTimer(bt);
          setTurn(!turn);
          handleWhiteTurn();
        } else {
          const wt = whiteTimer;
          wt.setSeconds(wt.getSeconds() + gameType.increment);
          setWhiteTimer(wt);
          setTurn(!turn);
          handleBlackTurn();
        }
      }
    }
  };

  /* 1 tick of the whiteTimer */
  const handleWhiteTurn = () => {
    if (!whiteTimer.getMinutes() && !whiteTimer.getSeconds()) setTick(1);
    else {
      if (firstMove.current) {
        // check if it is the first round and add increment to whiteTimer if firsRound === true. space bar event handles every other round
        firstMove.current = false;
        let wt = whiteTimer;
        wt.setSeconds(wt.getSeconds() + gameType.increment + 1);
        setWhiteTimer(wt);
      }
      let wt = whiteTimer;
      wt.setSeconds(wt.getSeconds() - 1);
      setWhiteTimer(wt);
      setTick((p) => p + 1); // trigger useEffect to tick the timer
    }
  };

  /* 1 tick of the blackTimer */
  const handleBlackTurn = () => {
    if (!blackTimer.getMinutes() && !blackTimer.getSeconds()) setTick(1);
    else {
      const bt = blackTimer;
      bt.setSeconds(bt.getSeconds() - 1);
      setBlackTimer(bt);
      setTick((p) => p + 1); // trigger useEffect to tick the timer
    }
  };

  /* update the temporary game settings and check value against game type
     and
     set class name of target input to show if settings match */
  const handleFooterInputChange = (e, name) => {
    setTempGameType({ ...tempGameType, [name]: parseFloat(e.target.value) });
    parseFloat(gameType[name]) === parseFloat(e.target.value)
      ? setSettingsChanged({ ...settingsChanged, [name]: '' })
      : setSettingsChanged({ ...settingsChanged, [name]: 'value-changed' });
  };
  /* update gameType settings of the category selected
     and
     update settingsChanged to reset className of input
     and
     set timers to the new value
     and
     reset game clock and turn */
  const handleFooterSettingsButton = (name) => {
    setGameType({ ...gameType, [name]: tempGameType[name] });
    setSettingsChanged({ ...settingsChanged, [name]: '' });
    if (name === 'minutes' && gameType.minutes !== tempGameType.minutes) {
      setWhiteTimer(
        new Date(0, 0, 0, 0, tempGameType.minutes, gameType.seconds)
      );
      setBlackTimer(
        new Date(0, 0, 0, 0, tempGameType.minutes, gameType.seconds)
      );
    } else if (
      name === 'seconds' &&
      gameType.seconds !== tempGameType.seconds
    ) {
      setWhiteTimer(
        new Date(0, 0, 0, 0, gameType.minutes, tempGameType.seconds)
      );
      setBlackTimer(
        new Date(0, 0, 0, 0, gameType.minutes, tempGameType.seconds)
      );
    } else if (
      name === 'increment' &&
      gameType.increment !== tempGameType.increment
    ) {
      const newDate = new Date(0, 0, 0, 0, gameType.minutes, gameType.seconds);
      setWhiteTimer(newDate);
      setBlackTimer(newDate);
    }
    resetGame();
  };

  /* reset relevant variables to initial values */
  const resetGame = () => {
    clearTimeout(timer);
    setTurn(true);
    setTick(1);
    setPaused(false);
    firstMove.current = true;
  };

  /* similates interval when tick is updated every second.
     workaround for issue with states updates not being available inside of a
     setInterval loop */
  useEffect(() => {
    if (tick === 1 || firstUpdate.current === true) {
      firstUpdate.current = false;
    } else {
      if (turn) {
        timer = setTimeout(handleWhiteTurn, 1000);
      } else if (!turn) {
        timer = setTimeout(handleBlackTurn, 1000);
      }
    }
  }, [tick]);

  /* add event listener if either the clock ticks or the turn is changed */
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [turn, tick]);

  /* this use effect allows me to to track difference in game and tempGame
     for testing NOT NECESSARY for clock to function*/
  useEffect(() => {
    console.log(gameType);
    console.log(tempGameType);
    console.log(settingsChanged);
  }, [gameType, tempGameType]);

  return (
    <stateContext.Provider
      value={{
        blackTimer,
        setBlackTimer,
        buttonActive,
        setButtonActive,
        footerSettingsActive,
        setFooterSettingsActive,
        gameType,
        setGameType,
        paused,
        setPaused,
        settingsChanged,
        setSettingsChanged,
        tempGameType,
        setTempGameType,
        turn,
        setTurn,
        whiteTimer,
        setWhiteTimer,
        footerHelpActive,
        setFooterHelpActive,
        handleClockButton,
        handleFooterInputChange,
        handleFooterSettingsButton,
        handleKeyDown,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
