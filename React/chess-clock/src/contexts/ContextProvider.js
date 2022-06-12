import React, { createContext, useContext, useState, useEffect } from 'react';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [turn, setTurn] = useState('white');
  const [whiteTimer, setWhiteTimer] = useState(new Date(0, 0, 0, 0, 10, 0));
  const [blackTimer, setBlackTimer] = useState(new Date(0, 0, 0, 0, 10, 0));

  useEffect;
};
