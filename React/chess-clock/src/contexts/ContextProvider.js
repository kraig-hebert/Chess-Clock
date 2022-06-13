import React, { createContext, useContext, useState, useEffect } from 'react';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [footerActive, setFooterActive] = useState(true);
  const [turn, setTurn] = useState(true);
  const [paused, setPaused] = useState(false);
  const [whiteClock, setWhiteClock] = useState(new Date(0, 0, 0, 0, 10, 0));
  const [blackClock, setBlackClock] = useState(new Date(0, 0, 0, 0, 10, 0));
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
    if (text === 'settings') setFooterActive(!footerActive);
    else if (text === 'play') setPaused(!paused);
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Enter') setTurn(!turn);
    else console.log(event.code);
  };

  const handleInputChange = (e, text) => {
    setTempGameType({ ...tempGameType, [text]: e.target.value });
    console.log(tempGameType);
    console.log('this');
    parseFloat(gameType.minutes) === parseFloat(tempGameType.minutes)
      ? setSettingsChanged({ ...settingsChanged, [text]: '' })
      : setSettingsChanged({ ...settingsChanged, [text]: 'value-changed' });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [turn]);

  /* this use effect allows to to track difference in game and tempGame for testing NOT NECESSARY */
  useEffect(() => {
    console.log(gameType);
    console.log(tempGameType);
    console.log(settingsChanged);
  }, [gameType, tempGameType]);

  return (
    <stateContext.Provider
      value={{
        footerActive,
        setFooterActive,
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
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
