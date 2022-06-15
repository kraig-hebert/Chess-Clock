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
  const firstUpdate = useRef(true);

  const [tick, setTick] = useState(1);
  const [footerSettingsActive, setFooterSettingsActive] = useState(true);
  const [footerHelpActive, setFooterHelpActive] = useState(false);
  const [turn, setTurn] = useState(true); // true=white turn false=black turn
  const [paused, setPaused] = useState(false);
  const [whiteTimer, setWhiteTimer] = useState(new Date(0, 0, 0, 0, 10, 0));
  const [blackTimer, setBlackTimer] = useState(new Date(0, 0, 0, 0, 10, 0));
  const [gameType, setGameType] = useState({
    minutes: 10,
    seconds: 0,
    increment: 5,
  });
  const [tempGameType, setTempGameType] = useState({
    minutes: 10,
    seconds: 0,
    increment: 5,
  });
  const [settingsChanged, setSettingsChanged] = useState({
    minutes: '',
    seconds: '',
    increment: '',
  });

  const handleClockButton = (e, text) => {
    console.log(e);
    if (text === 'settings') {
      setFooterHelpActive(false);
      setFooterSettingsActive(!footerSettingsActive);
    } else if (text === 'play') {
      setPaused(!paused);
      if (tick === 1) setTick(2);
      else {
        clearTimeout(timer);
        setTick(1);
      }
    } else if (text === 'reset') {
      const newDate = new Date(0, 0, 0, 0, gameType.minutes, gameType.seconds);
      setWhiteTimer(newDate);
      setBlackTimer(newDate);
      resetGame();
    } else if (text === 'help') {
      setFooterSettingsActive(false);
      setFooterHelpActive(!footerHelpActive);
    }
  };

  const resetGame = () => {
    clearTimeout(timer);
    setTurn(true);
    setTick(1);
    setPaused(false);
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      if (tick === 1) {
        return undefined; // ignore space bar if game is paused or play button has not been pressed to start game
      } else {
        clearTimeout(timer);
        if (turn) {
          setTurn(!turn);
          handleWhiteTurn();
        } else {
          setTurn(!turn);
          handleBlackTurn();
        }
      }
    }
  };

  const handleWhiteTurn = () => {
    if (whiteTimer.getMinutes() === 0 && whiteTimer.getSeconds() === 0) {
      console.log('ova');
    } else {
      const newDate = new Date(
        0,
        0,
        0,
        0,
        whiteTimer.getMinutes(),
        whiteTimer.getSeconds()
      );
      newDate.setSeconds(newDate.getSeconds() - 1);
      setWhiteTimer(newDate);
    }
    setTick((p) => p + 1);
  };
  const handleBlackTurn = () => {
    if (blackTimer.getMinutes() === 0 && blackTimer.getSeconds() === 0) {
      console.log('ova');
    } else {
      const newDate = new Date(
        0,
        0,
        0,
        0,
        blackTimer.getMinutes(),
        blackTimer.getSeconds()
      );
      newDate.setSeconds(newDate.getSeconds() - 1);
      setBlackTimer(newDate);
    }
    setTick((p) => p + 1);
  };

  const handleInputChange = (e, text) => {
    setTempGameType({ ...tempGameType, [text]: e.target.value });
    parseFloat(gameType[text]) === parseFloat(e.target.value)
      ? setSettingsChanged({ ...settingsChanged, [text]: '' })
      : setSettingsChanged({ ...settingsChanged, [text]: 'value-changed' });
  };

  const handleFooterButton = (e, text) => {
    setGameType({ ...gameType, [text]: tempGameType[text] });
    setSettingsChanged({ ...settingsChanged, [text]: '' });
    if (text === 'minutes' && gameType.minutes !== tempGameType.minutes) {
      setWhiteTimer(
        new Date(0, 0, 0, 0, tempGameType.minutes, gameType.seconds)
      );
      setBlackTimer(
        new Date(0, 0, 0, 0, tempGameType.minutes, gameType.seconds)
      );
      resetGame();
    } else if (
      text === 'seconds' &&
      gameType.seconds !== tempGameType.seconds
    ) {
      setWhiteTimer(
        new Date(0, 0, 0, 0, gameType.minutes, tempGameType.seconds)
      );
      setBlackTimer(
        new Date(0, 0, 0, 0, gameType.minutes, tempGameType.seconds)
      );
      resetGame();
    } else if (
      text === 'increment' &&
      gameType.increment !== tempGameType.increment
    ) {
      const newDate = new Date(0, 0, 0, 0, gameType.minutes, gameType.seconds);
      setWhiteTimer(newDate);
      setBlackTimer(newDate);
      resetGame();
    }
  };

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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [turn, tick]);

  /* this use effect allows me to to track difference in game and tempGame for testing NOT NECESSARY for clock to function*/
  useEffect(() => {
    console.log(gameType);
    console.log(tempGameType);
    console.log(settingsChanged);
  }, [gameType, tempGameType]);

  return (
    <stateContext.Provider
      value={{
        footerSettingsActive,
        setFooterSettingsActive,
        handleClockButton,
        handleKeyDown,
        turn,
        setTurn,
        gameType,
        setGameType,
        paused,
        setPaused,
        handleInputChange,
        tempGameType,
        settingsChanged,
        setSettingsChanged,
        handleFooterButton,
        whiteTimer,
        setWhiteTimer,
        blackTimer,
        setBlackTimer,
        footerHelpActive,
        setFooterHelpActive,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
