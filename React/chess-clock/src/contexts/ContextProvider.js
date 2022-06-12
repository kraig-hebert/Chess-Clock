import React, { createContext, useContext, useState, useEffect } from 'react';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [footerActive, setFooterActive] = useState(true);

  const handleClockButton = (e, text) => {
    console.log(e);
    if (text === 'settings') setFooterActive(!footerActive);
  };
  return (
    <stateContext.Provider
      value={{
        footerActive,
        setFooterActive,
        handleClockButton,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
