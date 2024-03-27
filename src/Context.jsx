import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
